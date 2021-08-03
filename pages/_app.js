import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import NavBar from "../src/components/NavBar";
import { Provider } from "next-auth/client";


const MyApp = (props) => {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const [dark, setDark] = useState(false)

    const theme = createTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    })

    return (
        <Provider session={pageProps.session}>

            <React.Fragment>
                <Head>
                    <title>TODO App</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <NavBar checked={dark} setDark={setDark} />
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
export default MyApp;