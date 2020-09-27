import React, { useState, useEffect, useCallback } from 'react';

import CustomAppBar from '../custom-app-bar/custom-app-bar.component';
import LivestreamTab from '../livestream-tab/livestream-tab.component';
import VideoDisplay from '../video-display/video-display.component';

import io from 'socket.io-client';
import { getDisplayStream, VideoCall } from './virtual-classroom.utils';

import { api } from '../../config';

import { VirtualClassroomContainer, VirtualClassroomContents, LeftContentContainer, RightContentContainer, VideoBoxContainer } from './virtual-classroom.styles';

const VirtualClassroom = (props) => {
    const [localStream, setLocalStream] = useState();
    const [micState, setMicState] = useState(true);
    const [camState, setCamState] = useState(true);
    const [socket, setSocket] = useState();
    const [peers, setPeers] = useState({});
    const [enterClassroom, setEnterClassroom] = useState(false)

    const { activeClassroom: { id: classroomId, createdBy: classroomOwnerId }, currentUser: { id: currentUserId } } = props;
  
    const videoCall = new VideoCall();
  
    const initVideoCall = useCallback((initiator) => {
      return videoCall.init(
          localStream,
          initiator
        );
    }, [localStream, videoCall]);
  
    const sendSignal = (peer, classroomId, peerId) => {
      peer.on('signal', data => {
          const signal = {
            classroomId,
            recipientId: peerId,
            senderId: currentUserId,
            desc: data
          };
          socket.emit('signal', signal);
        });
    }
  
    const streamPeer = (peer, peerId, peers) => {
        peers[peerId] = { peer };
        setPeers(peers);
        peer.on('stream', stream => {
            peers[peerId] = { peer, stream };
            setPeers(peers);
        });
    }
  
    const logPeerError = peer => {
      peer.on('error', function(err) {
          console.log(err);
        });
    }
  
    const createOffer = ({ classroomId, peerId }, peers) => {
        if(peerId === currentUserId) return;
        const peer = initVideoCall(true);
    
        sendSignal(peer, classroomId, peerId);
        streamPeer(peer, peerId, peers);
        logPeerError(peer);
    }; 
  
    const acceptOffer = ({ classroomId, senderId: peerId, desc }, peers) => {
        if(peerId === currentUserId) return;
        const peer = initVideoCall(false);
        peer.signal(desc);
        sendSignal(peer, classroomId, peerId);
        streamPeer(peer, peerId, peers)
    }
  
    const acceptAnswer = ({ desc, senderId: peerId  }, peers) => {
      if(peerId === currentUserId) return;
      try {   
        peers[peerId]['peer'].signal(desc);
      } catch(error) {
          alert(error)
      }
    };

    const startListeners = () => {
        const peers = {}
        socket.on('new-peer', peerId => {
            createOffer({ classroomId, peerId }, peers);
        });
    
        socket.on('desc', data => {
          const type = data.desc.type
          if (type === 'offer') return acceptOffer(data, peers);
          if (type === 'answer') return acceptAnswer(data, peers);
        });
    };
  
    useEffect(() => {
        const newSocket = io(api);
        setSocket(newSocket);
        getUserMedia();
    }, []);

    const joinLiveStream = () => {
        setEnterClassroom(true);
        socket.emit('join', { classroomId, currentUserId });
        startListeners();
    }
  
  
    function getUserMedia() {
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
                        {
                        localStream &&
                        <VideoDisplay stream={localStream} showControls={true} {...defaultVideoProps} />
                        }
                        {
                         peers &&
                         Object.keys(peers).map((peerId, key) => {
                            const peer = peers[peerId]
                             return (
                                <VideoDisplay key={key} stream={peer['stream']} showControls={false} {...defaultVideoProps} />
                             )
                         })
                        }
                    </VideoBoxContainer>
                </LeftContentContainer>
                <RightContentContainer>
                    {
                        enterClassroom ?
                        <LivestreamTab /> :
                        currentUserId && classroomId ? <button onClick={joinLiveStream}>Enter classroom</button>
                        : <div>An error occoured</div>
                    }
                </RightContentContainer>
            </VirtualClassroomContents>
        </VirtualClassroomContainer>
    );
}

export default React.memo(VirtualClassroom);