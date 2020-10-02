import React from 'react';

import PostNewAnnouncement from '../post-new-announcement/post-new-announcement.component'
import AnnouncementCards from '../announcement-cards/announcement-cards.component';
import EmptyRecord from '../empty-record/empty-record.component';

import { AnnouncementsContainer } from './announcements.styles';

const Announcements = ({ announcements }) => {
    return (
        <AnnouncementsContainer>
           <h5>Announcements</h5>
           <PostNewAnnouncement />
           {
               !announcements ?
                <AnnouncementCards />
                : <EmptyRecord message={'No announcement at the moment'} />
           }
        </AnnouncementsContainer>
    );
};

export default Announcements;