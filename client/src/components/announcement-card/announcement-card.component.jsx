import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { AnnouncementCardContainer } from './announcement-card.styles'

const AnnouncementCard = () => {
    return (
        <AnnouncementCardContainer>
            <CardHeader
                avatar={
                <Avatar className='avatar' aria-label="avatar">
                    T
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Terry Ebieto"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button aria-label="reply">
                    {'Reply'}
                </Button>
            </CardActions>
        </AnnouncementCardContainer>
    )
};

export default AnnouncementCard;