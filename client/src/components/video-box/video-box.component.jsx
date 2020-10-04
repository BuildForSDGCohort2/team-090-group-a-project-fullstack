import React from 'react';

import VideoDisplay from '../video-display/video-display.component';

import { VideoBoxContainer } from './video-box.styles';

const VideoBox = ({ peers, classroomOwnerId, localStream, ...defaultVideoProps }) => {
    return (
      peers &&  <VideoBoxContainer>
            {
            Object.keys(peers).length ?
            Object.keys(peers)
            .filter(peerId => peerId === classroomOwnerId)
            .map((peerId, key) => {
                const peer = peers[peerId]['peer'];
                return (
                peer && <VideoDisplay key={key} peer={peer} showControls={false} {...defaultVideoProps} />
                )
            })
            :
            localStream ?
            <VideoDisplay localStream={localStream} showControls={true} {...defaultVideoProps} />
            :
            <div className="loading"></div>
            }
        </VideoBoxContainer>
    )
};

export default VideoBox;