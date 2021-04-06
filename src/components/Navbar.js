import React , {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {Container} from '@material-ui/core'







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


 

const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
      setValue(value);
    };
    return (
      <div>
        <ElevationScroll>
          <AppBar position='fixed'>
            <Container>
              <Toolbar>
                <Typography variant='h6'>Scroll to Elevate App Bar</Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor='secondary'
                >
                  <Tab label='Blogs' />
                </Tabs>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>

        <Toolbar />
      </div>
    );
}


export default Navbar ;