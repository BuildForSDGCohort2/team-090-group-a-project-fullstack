import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { joinClassroomStart } from '../../redux/classroom/classroom.action';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectActiveClassroom, selectIsJoiningClassroom } from '../../redux/classroom/classroom.selector';

import PageLoader from '../../components/page-loader/page-loader.component';
import EmptyRecord from '../../components/empty-record/empty-record.component';
import AboutClassroom from '../../components/about-classroom/about-classroom.component';
import ClassroomTab from '../../components/classroom-tab/classroom-tab.component';
import Announcements from '../../components/announcements/announcements.component';



import { ClassroomPageContainer, ClassroomSectionContainer } from './classroom.styles';

function ClassroomPage ({ match: { params: { id: classroomId } }, joinClassroomStart, currentUser, isJoiningClassroom, activeClassroom }) {
    useEffect(() => {
        if(classroomId && currentUser) joinClassroomStart({ classroomId, currentUser });
    }, [currentUser, classroomId, joinClassroomStart]);

    return (
    <ClassroomPageContainer>
        {
            isJoiningClassroom ? <PageLoader /> :
            activeClassroom ? 
            <ClassroomSectionContainer>
               <div className="classroom-left">
                 <AboutClassroom activeClassroom={activeClassroom} />
                </div>
                <div className="classroom-middle">
                    <Announcements />
                </div>
                <div className="classroom-right">
                    <ClassroomTab activeClassroom={activeClassroom} />
                </div>  
            </ClassroomSectionContainer>
            : <EmptyRecord message={'Error finding this classroom'} />
        }
    </ClassroomPageContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    joinClassroomStart: payload => dispatch(joinClassroomStart(payload))
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isJoiningClassroom: selectIsJoiningClassroom,
    activeClassroom: selectActiveClassroom
});

export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(ClassroomPage));