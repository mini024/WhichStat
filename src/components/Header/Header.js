import React, { Component } from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link, withRouter} from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root} style={{width: "100%"}}>
        <Toolbar>
          <Typography variant="h4" color="inherit">
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>WhichStat</Link>
          </Typography>
          <div id="Header-Buttons">
            <Link to='/about' style={{ textDecoration: 'none', color: 'inherit'}}>About</Link>
            <Link id="Header-Button" to='/glossary' style={{ textDecoration: 'none', color: 'inherit'}}>Glossary</Link>
          </div>
          
        </Toolbar>
    </div>
    )
  }
}

export default withStyles(styles)(Header);

