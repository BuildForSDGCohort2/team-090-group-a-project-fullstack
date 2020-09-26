import React, { useState, useEffect, useCallback } from 'react';

import CustomAppBar from '../custom-app-bar/custom-app-bar.component';
import LivestreamTab from '../livestream-tab/livestream-tab.component';
import VideoDisplay from '../video-display/video-display.component';

import io from 'socket.io-client';
import { getDisplayStream, VideoCall } from './virtual-classroom.utils';

import { api } from '../../config';

import { VirtualClassroomContainer, VirtualClassroomContents, LeftContentContainer, RightContentContainer, VideoBoxContainer } from './virtual-classroom.styles';

const VirtualClassroom = (props) => {
    const [localStream, setLocalStream] = useState({});
    const [initiator, setInitiator] = useState(false);
    const [micState, setMicState] = useState(true);
    const [camState, setCamState] = useState(true);
    const [socket, setSocket] = useState();
    const [peers, setPeers] = useState({});

    const { activeClassroom: { id: classroomId, createdBy: classroomOwnerId }, currentUser: { id: currentUserId } } = props;
  
    const videoCall = new VideoCall();
  
    const initVideoCall = useCallback(() => {
      return videoCall.init(
          localStream,
          initiator
        );
    }, [initiator, localStream, videoCall]);
  
    const sendSignal = useCallback((peer, classroomId, peerId) => {
      peer.on('signal', data => {
          const signal = {
            classroomId,
            recipientId: peerId,
            senderId: currentUserId,
            desc: data
          };
          socket.emit('signal', signal);
        });
    }, [currentUserId, socket])
  
    const streamPeer = useCallback((peer, peerId) => {
      peer.on('stream', stream => {
          const newPeers = { ...peers }
          newPeers[peerId] = { peer, stream };
          setPeers({ ...newPeers });
      });
    },[peers])
  
    const logPeerError = peer => {
      peer.on('error', function(err) {
          console.log(err);
        });
    }
  
    const createOffer = useCallback(({ classroomId, peerId }) => {
      setInitiator(true)
      const peer = initVideoCall();
  
      sendSignal(peer, classroomId, peerId);
      streamPeer(peer, peerId);
      logPeerError(peer);
    }, [initVideoCall, sendSignal, streamPeer]); 
  
    const acceptOffer = useCallback(({ classroomId, senderId: peerId, desc }) => {
      if(peerId === currentUserId) return;
      setInitiator(false)
      const peer = initVideoCall();
      peer.signal(desc);
      sendSignal(peer, classroomId, peerId);
      streamPeer(peer, peerId)
    }, [initVideoCall, sendSignal, streamPeer, currentUserId]);
  
    const acceptAnswer = useCallback(({ desc, senderId: peerId  }) => {
      if(peerId === currentUserId) return;
      peers[peerId]['peer'].signal(desc);
    }, [peers, currentUserId]);
  
    useEffect(() => {
      if(!currentUserId && !classroomOwnerId && !classroomId) return;
      const socket = io(api);
      setSocket(socket);
      socket.emit('join', { classroomId, currentUserId });
  
      getUserMedia();
      socket.on('add-peer', peerId => {
          if(peerId !== currentUserId) createOffer({ classroomId, peerId });
      });
  
      socket.on('desc', data => {
        const type = data.desc.type
        if (type === 'offer') return acceptOffer(data);
        if (type === 'answer') return acceptAnswer(data);
      });
    }, [classroomId, classroomOwnerId, currentUserId, createOffer, acceptOffer, acceptAnswer])
  
  
    function getUserMedia(cb) {
      return new Promise((resolve, reject) => {
        navigator.getUserMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia;
        const op = {
          video: {
            width: { min: 160, ideal: 640, max: 1280 },
            height: { min: 120, ideal: 360, max: 720 }
          },
          audio: true
        };
        navigator.getUserMedia(
          op,
          stream => {
            setLocalStream(stream)
            resolve();
          },
          () => {}
        );
      });
    }
  
    function setAudioLocal(){
      if(localStream.getAudioTracks().length>0){
        localStream.getAudioTracks().forEach(track => {
          track.enabled=!track.enabled;
        });
      }
      setMicState(!micState);
    }
  
    function setVideoLocal(){
      if(localStream.getVideoTracks().length>0){
        localStream.getVideoTracks().forEach(track => {
          track.enabled=!track.enabled;
        });
      }
      setCamState(!camState)
    }
  
    function getDisplay() {
          getDisplayStream().then(stream => {
              stream.oninactive = () => {
              peers.forEach(item => {
                  const { peer } = item;
                  peer.removeStream(localStream);
              })
              getUserMedia().then(() => {
                  peers.forEach(item => {
                      const { peer } = item;
                      peer.addStream(localStream);
                  });
                });
              };
              setLocalStream(stream)
              peers.forEach(item => {
                  const { peer } = item;
                  peer.addStream(localStream);
              });
            });
    }

    const defaultVideoProps = ({
        getDisplay:getDisplay,
        setAudioLocal: setAudioLocal,
        micState: micState,
        setVideoLocal: setVideoLocal,
        camState: camState
    });

    return(
        <VirtualClassroomContainer>
            <CustomAppBar {...props} />
            <VirtualClassroomContents>
                <LeftContentContainer>
                    <VideoBoxContainer>
                        <VideoDisplay stream={localStream} showControls={true} {...defaultVideoProps} />
                    </VideoBoxContainer>
                </LeftContentContainer>
                <RightContentContainer>
                    <LivestreamTab />
                </RightContentContainer>
            </VirtualClassroomContents>
        </VirtualClassroomContainer>
    );
}

export default React.memo(VirtualClassroom);