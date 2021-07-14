import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

const Update = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState(props.todosData.todo);

    const updateData = async () => {
        try {
            const body = {
                todo: todo,

            }
            const response = await fetch(`http://localhost:3000/api/update/${props.todosData.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            props.getData();
        } catch (error) {
            console.error(error);
        }

    }


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateAndClose = () => {
        updateData()
        setOpen(false);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Update Todo</h2>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="Edit todo"
                    variant="outlined"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />

            </form>
            <Button size="small" type="button" color="primary" variant="contained" onClick={handleClose}>
                Close
            </Button>
            <Button size="small" type="button" color="primary" variant="contained" onClick={updateAndClose}>
                Update
            </Button>
        </div>
    );

    return (
        <div>
            <Button color="primary" variant='contained' type="button" size="small" onClick={handleOpen}>
                Update
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default Update;