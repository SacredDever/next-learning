
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

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
            <Button variant='contained' color="primary" >Submit</Button>
        </div>
    )
}
