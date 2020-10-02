import React from 'react';

import AnnouncementCard from '../announcement-card/announcement-card.component';

import { AnnouncementCardsContainer } from './announcement-cards.styles';

const AnnouncementCards = () => {
    return (
        <AnnouncementCardsContainer>
            <AnnouncementCard />
            <AnnouncementCard />
        </AnnouncementCardsContainer>
    )
};

export default AnnouncementCards;