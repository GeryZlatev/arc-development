import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
const { children} = props;

const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
});

return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
});
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))


export default function Header(props) {

    const classes = useStyles();

    return (
        <>
        <ElevationScroll>
            <AppBar position="fixed">
            <Toolbar disableGutters>
                <img src={logo} alt="company logo"/>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>

    )

}