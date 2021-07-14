import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'

const DarkTheme = (props) => {
    console.log(props)
    // const [dark, setDark] = useState(false)

    // const theme = createTheme({
    //     palette: {
    //         type: dark ? 'dark' : 'light',
    //     },
    // })

    return (
        // <ThemeProvider theme={theme}>
        <>
            <Switch checked={props.checked} onChange={() => props.setDark(!props.checked)} />
            {/* <Paper>
                <Typography variant='h1'>This is a h1 text</Typography>

                <Typography variant='body2'>This is a body2 text</Typography>
                <h1>hwelllo</h1>
            </Paper> 
        // </ThemeProvider>*/}
        </>
    )
}

export default DarkTheme;