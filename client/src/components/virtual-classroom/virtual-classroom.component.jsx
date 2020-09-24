import React from 'react';

import CustomAppBar from '../custom-app-bar/custom-app-bar.component';
import LivestreamTab from '../livestream-tab/livestream-tab.component';

import { VirtualClassroomContainer, VirtualClassroomContents, LeftContentContainer, RightContentContainer, VideoBoxContainer } from './virtual-classroom.styles';

const VirtualClassroom = (props) => {
    return(
        <VirtualClassroomContainer>
            <CustomAppBar {...props} />
            <VirtualClassroomContents>
                <LeftContentContainer>
                    <VideoBoxContainer />
                </LeftContentContainer>
                <RightContentContainer>
                    <LivestreamTab />
                </RightContentContainer>
            </VirtualClassroomContents>
        </VirtualClassroomContainer>
    );
}

export default VirtualClassroom;