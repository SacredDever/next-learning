import React from 'react';
import Switch from '@material-ui/core/Switch';

const DarkTheme = (props) => {
    return (
        <>
            <Switch checked={props.checked} onChange={() => props.setDark(!props.checked)} />
        </>
    )
}

export default DarkTheme;