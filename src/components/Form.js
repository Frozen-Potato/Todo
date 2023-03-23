import React, { useState } from "react";
import { Button, TextField, Modal, Box } from '@mui/material';

function Form(props){
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        name.length === 0 ? alert('can not be empty') : props.addTask(name);
        setOpen(false);
        setName("");
    }


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
        <div>
            <Button variant="contained" onClick={handleOpen}>Add New Task</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <h2 className="label-wrapper">
                            <label>
                                What need to be done ?
                            </label>
                        </h2>
                        <TextField id="standard-basic" label="New Task Name" variant="standard" type="text" name="text" value={name} onChange={handleChange} />
                        <Button variant="contained" type="submit">Add</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}
export default Form;