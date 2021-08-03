
import { makeStyles } from '@material-ui/core/styles';
import Details from '../src/components/Details';
import React from 'react';
import { Link } from '@material-ui/core';

import { signIn, signOut, useSession } from "next-auth/client";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
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

}));

const Home = () => {
    const [session, loading] = useSession();
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            {!session && (
                <>
                    Not signed in
                    <button onClick={signIn}>Sign in</button>
                </>
            )}
            {
                session && (
                    <>
                        Signed In as {session.user.email}
                        <div>
                            <button onClick={signOut}>Logout</button>
                            <Details />
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Home;