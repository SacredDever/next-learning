
import { makeStyles } from '@material-ui/core/styles';
import Details from '../src/components/Details';
import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import { withStyles } from "@material-ui/core/styles";

import { signIn, signOut, useSession } from "next-auth/client";
import Loginbtn from '../src/components/Button/Loginbtn';

const rightColor = 'white';
const leftColor = '#FE571A';

// - boder color
const borderColor = '#5EC0DC';

const styles = (theme) => ({
    // root: {
    //     '& > *': {
    //         margin: theme.spacing(1),
    //         width: '25ch',
    //     },
    // },
    btn: {
        background: `linear-gradient(90deg,  ${rightColor} 0%, ${leftColor}  100%)`,
        textTransform: 'none',
        padding: '14px 76px',
        color: 'red',
        // width: '325px',
        // height: '55px',
        '&:disabled': {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(90deg, ${rightColor} 0%, ${leftColor}  100%)`,
        },
        '&:hover': {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(90deg, ${rightColor} 0%, ${leftColor}  100%)`,
        },
        '&:focus': {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(90deg, ${rightColor} 0%, ${leftColor}  100%)`,
            border: `2px solid  ${borderColor}`,
        },
        '&:active': {
            background: ` linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(270deg, #FE571A 50%, #988781 93.12%)`,
            border: 'none',
        },
    },
    layout: {
        marginLeft: 200,
        marginRight: 200,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 50,
            marginRight: 50,
        },
    }

});

const Home = ({ classes }) => {
    const [session, loading] = useSession();
    // const classes = useStyles();

    return (
        <div
            className={classes.layout}
        >
            {!session && (
                <>
                    <h3>Not signed in</h3>
                    {/* <Loginbtn variant="contained" color="primary" onClick={() => console.log("clicked")}>Tets</Loginbtn>
                    <Loginbtn variant="contained" color="secondary" className={classes.btn} nClick={() => console.log(" clicked")}>MODIFY</Loginbtn>
                    <Loginbtn variant="outlined" color="secondary" onClick={() => console.log("clicked")}>Tets</Loginbtn>
                    <Loginbtn disabled onClick={() => console.log("clicked")}>Tets</Loginbtn> */}
                    <Loginbtn variant="contained" color="secondary" onClick={signIn}>Sign in</Loginbtn>



                </>
            )}
            {
                session && (
                    <>
                        Signed In as {
                            session.user.name
                        }
                        <div>
                            <button onClick={signOut}>Logout</button>
                            <Details user={session} />
                        </div>
                    </>
                )
            }

        </div>
    )
}
export default withStyles(styles)(Home);
// export default Home;