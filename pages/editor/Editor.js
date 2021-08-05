import React from 'react';
import Large from '../../src/components/Cards/Large';
import { makeStyles } from "@material-ui/core/styles";
import Small from '../../src/components/Cards/Small';
import LeftNav from '../../src/components/SideNav/LeftNav';
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

    }
});
// layout
const Editor = () => {
    const classes = useStyles();
    return (
        <div>
            <LeftNav />

            <div className={classes.main}>
                <Large />
                <Small />
            </div>

        </div>
    )
}

export default Editor;