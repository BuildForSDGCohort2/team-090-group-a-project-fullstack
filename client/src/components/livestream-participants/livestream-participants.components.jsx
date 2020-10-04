import React from 'react';
import VideoDisplay from '../video-display/video-display.component';
import { LivestreamParticipantsContainer } from './livestream-participants.styles';
const LivestreamParticipants = ({ peers, localStream, currentUserId, classroomOwnerId, ...defaultVideoProps }) => (
    <LivestreamParticipantsContainer>
        {   
            !localStream ?
            <div className="loading"></div>
            :
            localStream && (currentUserId !== classroomOwnerId) ?
            <div className="local-stream-wrapper">
                <VideoDisplay localStream={localStream} showControls={true} {...defaultVideoProps} />
            </div>
            : null
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