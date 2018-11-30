import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';

export default class Questionarie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: null,
      currentQuestion: null,
      questionId: 1,
      result: false
    }

    this.handleClickYes = this.handleClickYes.bind(this);
    this.handleClickNo = this.handleClickNo.bind(this);
  }

  handleClickYes() {
    const {currentQuestion, questionId} = this.state
    var nextQuestion = currentQuestion.Yes;
    if (nextQuestion.id === -1) {
      this.setState({currentQuestion:currentQuestion.Yes, result: true})
    } else {
      this.setState({currentQuestion:currentQuestion.Yes, questionId:questionId*10+1})
    }
  }

  handleClickNo() {
    const {currentQuestion, questionId} = this.state
    var nextQuestion = currentQuestion.No;
    if (nextQuestion.id === -1) {
      this.setState({currentQuestion:currentQuestion.No, result: true})
    } else {
      this.setState({currentQuestion:currentQuestion.No, questionId:questionId*10})
    }
  }
  
  componentDidMount() {
    var result = require('../../shared/questions.json');
    this.setState({currentQuestion: result.questionTree, questions: result.questionTree})
  }

  render() {
    const {currentQuestion, result} = this.state
    return (
      <div class="MainContent">
        {currentQuestion != null ?
          (!result ? 
            (
            <div>
              <h3>{currentQuestion.Title}</h3>
              <p>{currentQuestion.Description}</p>
              <div id="AnswerButtons">
                <Button variant="contained" id="WhiteButton" onClick={this.handleClickYes}>Yes</Button>
                <Button variant="contained" id="WhiteButton-left" onClick={this.handleClickNo}>No</Button> 
              </div>
            </div>
            ) : (
            <div id="ResultCard">
              <h3>{currentQuestion.Title}</h3>
              <p id="Description">{currentQuestion.Description}</p>
              {currentQuestion.Links[0] != null ? 
                <div>
                  <iframe id="videoFrame" width="560" height="315" src={currentQuestion.Links[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> : <div />
              }
            </div>
            )
          ) : <div> Error Questions not Found </div>
      }
      <Link to='/'>
        <Button variant="contained" id="WhiteButton-bottom"> Restart </Button>
      </Link>
      </div>
    )
  }
}