import React from 'react';
import Large from '../../src/components/Cards/Large';
import { makeStyles } from "@material-ui/core/styles";
import Small from '../../src/components/Cards/Small';
import LeftNav from '../../src/components/SideNav/LeftNav';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Loginbtn from '../../src/components/Button/Loginbtn';
import CardContainer from '../../src/components/Cards/CardContainer';
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
        background: "#111",
        overflowX: "hidden",
        paddingTop: '20px',

    },
    main: {
        marginLeft: "200px", /* Same as the width of the sidenav */
        fontSize: "28px",/* Increased text to enable scrolling */
        padding: "0px 10px",
        // background: "#303"
    },
    cardContainer: {
        padding: 10,
        background: "#313637",
        marginTop: 20,
        borderRadius: 4
    }
});
// layout
const Editor = () => {
    const classes = useStyles();
    return (

        <div>
            <LeftNav />
            <div className={classes.main}>
                <Loginbtn >Test</Loginbtn>
                <div className={classes.cardContainer}>


                    <Grid container spacing={1}>

                        <Grid item xs={12}>
                            <Large />

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>

                        <Grid item xs={12}>
                            <Large />

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Small />
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}

export default Editor;