import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function LoginPopup(props) {
  // const [open, setOpen] = React.useState(props.open);
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate();

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
  };

  const loginSubmit = () => {
    props.setOpen(false);

    let isLoginValid = username === 'doctor' && password === 'doctor23'

    if (isLoginValid) {
      toast.success('Login Successful!', { position: toast.POSITION.TOP_RIGHT });
      navigate('/home')
    }
    else
      toast.error('Invalid Credentials', { position: toast.POSITION.TOP_RIGHT });
  }

  console.log("Login clicked : ", props)
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Login
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' />
            <TextField id="outlined-basic" type="password" label="Password" onChange={(e) => setPassword(e.target.value)} variant="outlined" placeholder='Enter your password' />
          </Box>
        </DialogContent>
        {/* <DialogActions> */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { ml: 9, mb: 1, width: '15ch' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}

        >
          <Button Button variant="contained" onClick={loginSubmit}>Login</Button>
        </Box>
        {/* </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}