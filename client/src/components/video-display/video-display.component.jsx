import React, { useRef, useEffect } from 'react';

import MicOnIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CamOnIcon from '@material-ui/icons/Videocam';
import CamOffIcon from '@material-ui/icons/VideocamOff';
import ShareScreenIcon from '@material-ui/icons/ScreenShare';

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
        <div className='local-video-wrapper'>
            <video
                autoPlay
                muted
                id={'localVideo'}
                width={300}
                height={300}
                ref={videoRef}
            />
            {
                showControls &&
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
            }
        </div>
    );
    
}
export default React.memo(VideoDisplay);