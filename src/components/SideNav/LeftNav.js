import React from 'react';
// import Large from '../../src/components/Cards/Large';
import { makeStyles } from "@material-ui/core/styles";
import Loginbtn from '../Button/Loginbtn';
// import Small from '../../src/components/Cards/Small';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SaveIcon from '@material-ui/icons/Save';
import FeatureTile from '../Button/FeatureTile';
const useStyles = makeStyles({
    root: {
    },
    sidenav: {
        height: "100%",
        width: "200px",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        // background: "#111",// this is just to test guide
        background: "#2C2F30",// this is just to test guide
        overflowX: "hidden",
        paddingTop: '20px',
    },
    lin: {
        padding: "6px 8px 6px 16px",
        textDecoration: "none",
        fontSize: "25px",
        color: "#818181",
        display: "block",
    },
    exitBtn: {
        marginBottom: 15,
        marginLeft: 10,
        fontSize: 11,
        width: "50%",
        height: 30,
        textTransform: 'none',
        background: "#424242"
    },

    btn: {
        marginLeft: 10,
        fontSize: 11,
        textAlign: "left",
        marginTop: 5,
        background: "#424242"
    }

});
// layout
const LeftNav = () => {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.sidenav}>
                <Loginbtn className={classes.exitBtn} color="secondary">Exit editor</Loginbtn>
                <Loginbtn className={classes.btn} endIcon={<SaveIcon />}>Create a Title for Your Fligth</Loginbtn>

                <FeatureTile startIcon={<SaveIcon />} endIcon={<SaveIcon />}>Feature Tile</FeatureTile>
                <Loginbtn startIcon={<SaveIcon />} className={classes.btn} >Add Content tile</Loginbtn>
            </div>


        </div>
    )
}

export default LeftNav;