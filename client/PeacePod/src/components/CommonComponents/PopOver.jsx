import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { X } from 'lucide-react';

export const PopOver = ({

    message,
}) => {
    

    console.log("pop up opened ")
    // const [open, setOpen] = useState(true)

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    
    //     setOpen(false);
    //   };

    //   const action = (
    //     // <React.Fragment>
    //       <IconButton
    //         size="small"
    //         aria-label="close"
    //         color="inherit"
    //         onClick={handleClose}
    //       >
    //         <X/>
    //       </IconButton>
    //     // </React.Fragment>
       
    //   );

  return (
    <>
    <Snackbar 
    anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
    open={open}
    autoHideDuration={1000}
    message={message}
    onClose={handleClose}
    action={action}
    />
    </>
  )
}
