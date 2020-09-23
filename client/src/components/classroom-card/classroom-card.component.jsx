import React from 'react';
import { useHistory } from 'react-router-dom';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { CardContainer, CardActionAreaContainer } from './classroom-card.styles'
import { getLocalTime } from '../../utils/date';

const ClassroomCard = ({ classroom, ...otherProps }) => {
    const history = useHistory();

    const navigateToUrl = url =>{
        history.push(url)
    }

    return (
        <CardContainer {...otherProps} variant="outlined">
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
            <CardActionAreaContainer onClick={() => navigateToUrl(`/classroom/${classroom.id}`)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {classroom.classroomName}
                    </Typography>
                    <Typography color="textSecondary">
                        {
                            `${getLocalTime(classroom.createdAt)} by 
                            ${classroom.classMembersInfo[classroom.createdBy]['memberProfile']['displayName']}`
                        }
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        {classroom.classroomDescription}
                    </Typography>
                </CardContent>
            </CardActionAreaContainer>
        </CardContainer>
    );
}

export default React.memo(ClassroomCard)