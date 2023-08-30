import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Upload = ({ isOpen, onClose, title, onSubmit, children, actions }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        {actions || (
          <>
          
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onSubmit} color="primary">
              Submit
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Upload;
