import React, { Component } from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
      <AppBar position="static" color="primary" className="header-bar">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            WhichStat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

export default withStyles(styles)(Header);

