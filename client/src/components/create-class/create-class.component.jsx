import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomTextField from '../custom-textfield/custom-textfield.component';


const CreateClass = ({ open, handleClose }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Create Classroom</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide your class name and brief description to continue
          </DialogContentText>
          <form noValidate>
            <CustomTextField id="classroom-name" label="Classroom Name" fullWidth variant="outlined" />
            <CustomTextField id="classroom-description" multiline rows={4} label="Classroom Description" fullWidth variant="outlined" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default CreateClass