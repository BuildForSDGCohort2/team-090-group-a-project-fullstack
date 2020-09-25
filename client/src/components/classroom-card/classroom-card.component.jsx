import React from 'react';
import { useHistory } from 'react-router-dom';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { CardContainer, CardActionAreaContainer } from './classroom-card.styles'
import { getLocalTime } from '../../utils/date';
import { Button, ButtonBase, ListItemIcon, ListItemText } from '@material-ui/core';

const ClassroomCard = ({ classroom, ...otherProps }) => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

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
                    <MoreVertIcon aria-controls="options" aria-haspopup="true" onClick={handleClick} />
                    <Menu
                        id="options"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Edit" />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <DeleteForeverIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Delete" />
                        </MenuItem>
                    </Menu>
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