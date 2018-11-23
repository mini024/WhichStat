import React, { Component } from 'react';
// Material UI
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class TestButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAnswering: false
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({isAnswering:!this.isAnswering});
  }

  render() {
    const {isAnswering}  = this.state;
    const { classes } = this.props;
    
    return (
      <div>
        { !isAnswering ? (
          <div className="TestButton">
            <h3>Start to know which statistical test to use</h3>
            <Button variant="contained" id="WhiteButton" onClick={this.handleClick}> Start </Button>
          </div>) : <div></div>
        }
      </div>
    )
  }
}

export default TestButton;


