import React, { useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, StylesContext } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

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
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transperent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        borderRadius: "0px"
    }
}))


export default function Header(props) {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4)
        }
    }, [value]);

    const classes = useStyles();

    const handleChange = (e, value) => {
        setValue(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    return (
        <>
        <ElevationScroll>
            <AppBar position="fixed">
            <Toolbar disableGutters>
                        <Button 
                        component={Link} 
                        to="/" 
                        className={classes.logoContainer}
                        disableRipple    
                        onClick={() => setValue(0)}
                        >
                            <img 
                            src={logo} 
                            className={classes.logo} 
                            alt="company logo" />
                        </Button>
                        <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        className={classes.tabContainer}
                        indicatorColor="primary"
                        >
                            <Tab 
                            className={ classes.tab} 
                            component={Link} 
                            to="/"
                            label="Home"
                            />
                            <Tab
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup={anchorEl ? "true" : undefined}    
                            className={ classes.tab} 
                            component={Link}
                            onMouseOver={(e) => handleClick(e)}    
                            to="/services"
                            label="Services"/>
                            <Tab 
                            className={ classes.tab} 
                            component={Link} 
                            to="/revolution"
                            label="The Revolution"/>
                            <Tab 
                            className={ classes.tab} 
                            component={Link} 
                            to="/about"
                            label="About Us"/>
                            <Tab 
                            className={ classes.tab} 
                            component={Link} 
                            to="/contact"
                            label="Contact Us"/>
                        </Tabs>
                        <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}>
                            Free Estimate
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            classes={{paper: classes.menu}}
                        >
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1)}}
                                component={Link}
                                to="/services"
                            >
                                Services
                            </MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1)}}
                                component={Link}
                                to="/customsoftware"
                            >
                                Custom Software Development
                            </MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1)}}
                                component={Link}
                                to="/mobileapps"
                            >
                                Mobile App Development
                            </MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1)}}
                                component={Link}
                                to="/websites"
                            >
                                Website Development
                            </MenuItem>
                        </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>

    )

}