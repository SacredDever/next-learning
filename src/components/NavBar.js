import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DarkTheme from './DarkTheme';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appName: {
        marginLeft: 170,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 35,

        },
    }
}));

const NavBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography className={classes.appName} variant="h6" color="inherit">
                        TODO APP
                        <DarkTheme checked={props.checked} setDark={props.setDark} />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;