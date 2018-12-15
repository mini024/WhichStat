import React, { Component } from 'react';
import Questionarie from '../Questionarie/Questionarie';
// Material UI
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAnswering: false
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  handleClick () {
    this.setState({isAnswering:!this.isAnswering});
  }

  handleReload () {
    this.setState({isAnswering:false});
  }

  render() {
    const {isAnswering}  = this.state;
    
    return (
      <div>
        <div class="MainContent">
            <h1>WhichStat</h1>
            <p> Which Stat is an application designed to help you choose the best Statistical Test for your project. <br/>Answer the following questions with the options that best describe your study.</p>
            <Link to='/questions' style={{ textDecoration: 'none' }} >
              <Button style={{ textDecoration: 'none', fontSize:'14px'}} variant="contained" id="WhiteButton" onClick={this.handleClick}> Start </Button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Home;


