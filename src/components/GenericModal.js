import * as React from 'react';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import {ThemeProvider, Typography} from "@mui/material";
import Box from "@mui/material/Box";


function GenericModal({theme, open, setOpen, title, description}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <ThemeProvider theme={theme}>
        <Modal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <Button type="submit" onClick={(e) => setOpen(false)}>Close</Button>
            </Box>
        </Modal>
        </ThemeProvider>
    );
}

export default GenericModal