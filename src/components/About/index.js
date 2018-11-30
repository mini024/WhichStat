import React, { Component } from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link, withRouter} from 'react-router-dom';


class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <h1> About Which-Stat</h1>
    )
  }
}

export default withStyles(styles)(Header);

