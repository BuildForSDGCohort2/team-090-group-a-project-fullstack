import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createClassroomStart } from '../../redux/classroom/classroom.action';
import { selectIsCreatingClassroom } from '../../redux/classroom/classroom.selector'
import { selectCurrentUser } from '../../redux/user/user.selector';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomTextField from '../custom-textfield/custom-textfield.component';


const CreateClass = ({ open, handleClose, currentUser, createClassroomStart, isCreatingClassroom }) => {
    const [formData, setFormData] = useState({ classroomName: '', classroomDescription: '' });
    const [isSubmitted, setIsSubmitted] = useState();

    const handleChange = event => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value  });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if(!formData.classroomName.trim().length || !formData.classroomDescription.trim().length) return;
        const data = { formData, currentUser };
        createClassroomStart(data);
        setFormData({ classroomName: '', classroomDescription: '' });
        handleClose();
        setIsSubmitted();
    }

    return (
        <React.Fragment>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Create Classroom</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Provide your class name and brief description to continue
                </DialogContentText>
                <form>
                    <CustomTextField error={ isSubmitted && !formData.classroomName.trim().length } helperText={'Names should be longer than 6 characters'} handleChange={handleChange} name={'classroomName'} id="classroom-name" label="Classroom Name" fullWidth variant="outlined" />
                    <CustomTextField error={ isSubmitted && !formData.classroomDescription.trim().length } helperText={'Description should be longer than 20 characters'} handleChange={handleChange} name={'classroomDescription'} id="classroom-description" multiline rows={4} label="Classroom Description" fullWidth variant="outlined" />
                </form>
                </DialogContent>
                <DialogActions>
                {
                    isCreatingClassroom ?
                    (
                    <Button color="primary">
                        Creating classroom...
                    </Button>
                    )
                    :
                    (
                    <Button onClick={handleSubmit} type={'submit'} color="primary">
                        Create
                    </Button>
                    )
                }
                {
                    !isCreatingClassroom && 
                    (
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                    )
                }
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    isCreatingClassroom: selectIsCreatingClassroom,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
    createClassroomStart: payload => dispatch(createClassroomStart(payload))
});

export default connect(mapStateToProps ,mapDispatchToProps)(CreateClass);