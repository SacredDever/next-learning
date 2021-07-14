import { Button, Grid, Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
// import Details from '../src/components/Details';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    inputStyle: {
        width: "100%",
        marginLeft: 0,
        marginTop: 25

    },
    // layout: {
    //     // marginLeft: 200,
    //     // marginRight: 200,
    //     [theme.breakpoints.down("sm")]: {
    //         marginLeft: 100,
    //         marginRight: 100,


    //     },
    // },
    btnStyle: {
        marginLeft: 0,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0,
            width: "100%"
        },
    }

}));

export default function AddTodo(props) {
    const classes = useStyles();
    const [todos, setTodos] = useState();

    const submitData = async () => {
        try {
            const body = {
                todos: todos,
            }
            const response = await fetch('http://localhost:3000/api/posttodos', {
                method: 'POST',
                body: JSON.stringify(body),
            })

            props.getData();
        } catch (error) {
            throw new Error("erro")
        }

        setTodos('');
    }



    return (
        <div >
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.inputStyle}
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    value={todos}
                    onChange={(e) => setTodos(e.target.value)} />

                <Button className={classes.btnStyle} variant='contained' color="primary" onClick={submitData} >Submit</Button>
            </form>


        </div >
    )
}
