import React, { Component } from 'react';
import Questionarie from '../Questionarie/Questionarie';
// Material UI
import Button from '@material-ui/core/Button';

class TestButton extends Component {

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
        { !isAnswering ? (
          <div class="MainContent">
            <h1>WhichStat</h1>
            <h3>Start to know which statistical test to use</h3>
            <Button variant="contained" id="WhiteButton" onClick={this.handleClick}> Start </Button>
          </div>) : (<div>
            <Questionarie />
            <Button variant="contained" id="WhiteButton-bottom" onClick={this.handleReload}>Restart</Button>
            </div>)
        }
      </div>
    )
  }
}

export default TestButton;


