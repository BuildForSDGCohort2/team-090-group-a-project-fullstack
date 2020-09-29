import React, { useRef, useEffect } from 'react';

import MicOnIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CamOnIcon from '@material-ui/icons/Videocam';
import CamOffIcon from '@material-ui/icons/VideocamOff';
import ShareScreenIcon from '@material-ui/icons/ScreenShare';
import IconButton from '@material-ui/core/IconButton';


import { VideoDisplayContainer } from './video-display.styles';

const VideoDisplay = ({ localStream, peer, showControls, getDisplay, setAudioLocal, micState, setVideoLocal, camState }) =>{
    const videoRef = useRef()
    useEffect(() => {
       if(localStream && videoRef) {
        videoRef.current.srcObject = localStream;
        return;
       }
       if(peer && videoRef) {
        peer.on('stream', remoteStream => {
            videoRef.current.srcObject = remoteStream;
        });
       }
    }, [localStream, peer]);

    return (
        <VideoDisplayContainer>
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    id={'localVideo'}
                    ref={videoRef}
                />
            </div>
            {
                showControls &&
                <div className="controls-container">
                    <div className='controls'>
                    <IconButton
                    className='control-btn'
                    onClick={() => {
                        getDisplay();
                    }}
                    >
                    <ShareScreenIcon />
                    </IconButton>
        
        
                    <IconButton
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
                    </IconButton>
        
                    <IconButton
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
                    </IconButton>
                </div>
                </div>
            }
        </VideoDisplayContainer>
    );
    
}
export default React.memo(VideoDisplay);