import React, { Component } from 'react';

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div class="MainContent">
        <h1> About Which-Stat </h1>
        <p >We know that analyzing the data compiled is the MOST IMPORTANT STEP in a project. It will determine if the project had statistical significance or not, so it is crucial to select the CORRECT statistical TEST for the type of variables in your study. We created this application from scratch. With our knowledge and previous experiences in the statistical field we discovered the different needs, questions, and issues that appears to everyone who needs to start to analyze your data when deciding</p>
      </div>
    )
  }
}

export default About;

