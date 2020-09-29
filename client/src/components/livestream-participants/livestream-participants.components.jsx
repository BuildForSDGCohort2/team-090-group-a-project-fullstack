import React from 'react';
import VideoDisplay from '../video-display/video-display.component';
import { LivestreamParticipantsContainer } from './livestream-participants.styles';
const LivestreamParticipants = ({ peers, localStream, ...defaultVideoProps }) => (
    <LivestreamParticipantsContainer>
        {
            localStream ?
            <div className="local-stream-wrapper">
                <VideoDisplay localStream={localStream} showControls={true} {...defaultVideoProps} />
            </div>
            :
            <div className="loading"></div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            <div className="video-display-wrapper">
                <VideoDisplay localStream={localStream} showControls={false} {...defaultVideoProps} />
            </div>
        }
        {
            peers &&
            Object.keys(peers).map((peerId, key) => {
            const peer = peers[peerId]['peer'];
                return (
            peer && 
            <div key={key} className="video-display-wrapper">
                <VideoDisplay peer={peer} showControls={false} {...defaultVideoProps} />
            </div>
                )
            })
        }
    </LivestreamParticipantsContainer>
);

export default LivestreamParticipants;