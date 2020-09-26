import React from 'react';

import MicOnIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CamOnIcon from '@material-ui/icons/Videocam';
import CamOffIcon from '@material-ui/icons/VideocamOff';
import ShareScreenIcon from '@material-ui/icons/ScreenShare';

const VideoDisplay = ({ stream, showControls, getDisplay, setAudioLocal, micState, setVideoLocal, camState }) =>(
    <div className='local-video-wrapper'>
        <video
            autoPlay
            muted
            src={stream}
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

export default React.memo(VideoDisplay);