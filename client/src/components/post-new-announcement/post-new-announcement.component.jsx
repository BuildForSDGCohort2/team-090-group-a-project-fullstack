import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import InputAdornment from '@material-ui/core/InputAdornment';

import { PostNewAnnouncementCountainer } from './post-new-announcement.styles'

const PostNewAnnouncement = () => {
    const [value, setValue] = React.useState('');
    const [helperText, setHelperText] = React.useState('')
    const [hasError, setHasError] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!value.trim(' ').length) {
            setHelperText('Required field');
            setHasError(true);
            return;
        } else {
            setHelperText('');
            setHasError(false);
        }

        alert('Announcement posted successfully');
    }

    return (
        <PostNewAnnouncementCountainer elevation={1}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    error={hasError}
                    id="post-new-announcement"
                    label="Post New Announcement"
                    multiline
                    rowsMax={12}
                    value={value}
                    onChange={handleChange}
                    helperText={helperText}
                    variant="outlined"
                    fullWidth={true}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <CreateIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <div className="action"> 
                <div className="grow"></div>
                <Button className="button" type="submit" color={'primary'}>Post</Button>
                </div>
        </form>
        </PostNewAnnouncementCountainer>
    );
}

export default PostNewAnnouncement;