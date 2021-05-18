import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function ElevationScroll(props) {
const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
});

return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
});
}

ElevationScroll.propTypes = {
children: PropTypes.element.isRequired,
/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
window: PropTypes.func,
};

export default function Header(props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                ARC DEVELOPMENT
            </Toolbar>
        </AppBar>
    )

}