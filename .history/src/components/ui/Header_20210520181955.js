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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
        color: "white",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}))


export default function Header(props) {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);


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

        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(3)
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setValue(2);
                }
                break;
            case "/about":
                if (value !== 3) {
                    setValue(3)
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4)
                }
                break;
            default:
                break;
        }
    }, [value]);

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const options = [
        {name: 'Services', link: '/services'},
        {name: 'Custom Software Development', link: '/customsoftware'},
        {name: 'Mobile App Development', link: '/mobileapps'},
        {name: 'Website Development', link: '/websites'}
    ]

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

    const onClickMenuItemHandler = (event, index) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(index)
    }

    const tabs = (
        <>
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
                    classes={{ paper: classes.menu }}
                    elevation={0}
            >
                            {options.map((option, i) => (
                <MenuItem
                                    key={option.link}
                                    component={Link}
                                    to={option.link}
                                    onClick={(event) => { onClickMenuItemHandler(event, i); setValue(1); handleClose() }}
                                    classes={{root: classes.menuItem}}
                                    selected={selectedIndex === i && value === 1}
            >
                                    {option.name}
                </MenuItem>
                            ))}
            </Menu>
        </>
    )

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
                        {matches ? null : tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>

    )

}