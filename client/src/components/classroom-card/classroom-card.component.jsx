import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { getLocalTime } from '../../utils/date';
import { navigateToUrl } from '../../utils/navigation';

const ClassroomCard = ({ classroom, ...otherProps }) => {
    const history = useHistory();

    const navigateToUrl = url =>{
        history.push(url)
    }
    
    return (
        <Card {...otherProps} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {classroom.id[0]}
                    </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={`ID: ${classroom.id}`}
            />
            <CardActionArea onClick={() => navigateToUrl(`/classroom/${classroom.id}`)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {classroom.classroomName}
                    </Typography>
                    <Typography color="textSecondary">
                        {`Created ${getLocalTime(classroom.createdAt)}`}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        {classroom.classroomDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default React.memo(ClassroomCard)