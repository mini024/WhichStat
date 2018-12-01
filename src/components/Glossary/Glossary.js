import React, { Component } from 'react';

class Glossary extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div class="MainContent">
        <h1> Glossary </h1>
        <h5>Word:</h5>
        <p>Definition</p>
      </div>
    )
  }
}

export default Glossary;
