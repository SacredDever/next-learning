import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Update from "./Update";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 8,
        marginBottom: 8
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const CardTodo = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>

                <Typography variant="h5" component="h2">
                    {props.todosData.todo}
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    color="primary"
                    size="small"
                    onClick={() => props.delTodo(props.todosData.id)}
                >Delete</Button>
                <Update todosData={props.todosData} getData={props.getData} />

            </CardActions>
        </Card>
    );
}

export default CardTodo;