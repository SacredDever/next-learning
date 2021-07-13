
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Details from '../src/components/Details';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Home() {
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
        } catch (error) {
            throw new Error("erro")
        }
    }

    return (
        <div >
            <h1>TODO</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    value={todos}
                    onChange={(e) => setTodos(e.target.value)} />

            </form>
            <Button variant='contained' color="primary" onClick={submitData} >Submit</Button>

            <Details />
        </div>
    )
}
