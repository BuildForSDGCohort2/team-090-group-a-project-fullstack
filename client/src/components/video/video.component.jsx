import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { getDisplayStream, VideoCall } from './video.utils';
import {ShareScreenIcon,MicOnIcon,MicOffIcon,CamOnIcon,CamOffIcon} from './Icons';

import { VideoContainer } from './video.styles'
import { api } from '../../config';

const Video = ({ classroomId }) => {
  const [localStream, setLocalStream] = useState({});
  const [remoteStreamUrl, setRemoteStreamUrl] = useState('');
  const [streamUrl, setStreamUrl] = useState('');
  const [initiator, setInitiator] = useState(false);
  const [full, setFull] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [micState, setMicState] = useState(true)
  const [waiting, setWaiting] = useState(true);
  const [camState, setCamState] = useState(true);
  const [socket, setSocket] = useState();
  const [peer, setPeeer] = useState();

  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  const videoCall = new VideoCall();

  useEffect(() => {
    const socket = io(api);
    setSocket(socket);
    getUserMedia().then(() => {
      socket.emit('join', { classroomId: classroomId });
    });

    socket.on('init', () => {
      setInitiator(true);
    });
    socket.on('ready', () => {
      enter(classroomId);
    });
    socket.on('desc', data => {
      if (data.type === 'offer' && initiator) return;
      if (data.type === 'answer' && !initiator) return;
      call(data);
    });
    socket.on('disconnected', () => {
      setInitiator(true);
    });
    socket.on('full', () => {
      setFull(true);
    });
  }, [])


  function getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia =
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
          setStreamUrl(stream)
          setLocalStream(stream)
          this.localVideo.srcObject = stream;
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
        peer.removeStream(localStream);
        getUserMedia().then(() => {
          peer.addStream(localStream);
        });
      };
      setStreamUrl(stream);
      setLocalStream(stream)
      localVideo.srcObject = stream;
      peer.addStream(stream);
    });
  }

  enter = classroomId => {
    setConnecting(true)
    const peer = videoCall.init(
      localStream,
      initiator
    );
    setPeeer(peer);

    peer.on('signal', data => {
      const signal = {
        room: classroomId,
        desc: data
      };
      socket.emit('signal', signal);
    });
    peer.on('stream', stream => {
      remoteVideo.srcObject = stream;
      setConnecting(false);
      setWaiting(false);
    });
    peer.on('error', function(err) {
      console.log(err);
    });
  };

  const call = otherId => {
    videoCall.connect(otherId);
  };

  const renderFull = () => {
    if (full) {
      return 'The room is full';
    }
  };
  
    return (
        <VideoContainer>
            <div className='video-wrapper'>
                <div className='local-video-wrapper'>
                    <video
                        autoPlay
                        id='localVideo'
                        muted
                        ref={video => (localVideo = video)}
                    />
                </div>
                <video
                autoPlay
                className={`${
                    connecting || waiting ? 'hide' : ''
                }`}
                id='remoteVideo'
                ref={video => (remoteVideo = video)}
                />

                <div className='controls'>
                    <button
                    className='control-btn'
                    onClick={() => {
                        getDisplay();
                    }}
                    >
                    <ShareScreenIcon />
                    </button>


                    <button
                    className='control-btn'
                    onClick={() => {
                        setAudioLocal();
                    }}
                    >
                    {
                        micState?(
                        <MicOnIcon/>
                        ):(
                        <MicOffIcon/>
                        )
                    }
                    </button>

                    <button
                    className='control-btn'
                    onClick={() => {
                        setVideoLocal();
                    }}
                    >
                    {
                        camState?(
                        <CamOnIcon/>
                        ):(
                        <CamOffIcon/>
                        )
                    }
                    </button>
                </div>

                {connecting && (
                <div className='status'>
                    <p>Establishing connection...</p>
                </div>
                )}
                {waiting && (
                <div className='status'>
                    <p>Waiting for someone...</p>
                </div>
                )}
                {renderFull()}
            </div>
        </VideoContainer>
    );
}

export default Video;