import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
    if (nextQuestion.id == -1) {
      this.setState({currentQuestion:currentQuestion.Yes, result: true})
    } else {
      this.setState({currentQuestion:currentQuestion.Yes, questionId:questionId*10+1})
    }
  }

  handleClickNo() {
    const {currentQuestion, questionId} = this.state
    var nextQuestion = currentQuestion.No;
    if (nextQuestion.id == -1) {
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
      <div className="questionarie">
        {currentQuestion == null ? (<p>Hello</p>) : 
          <div>
            <h3>{currentQuestion.Title}</h3>
            <p>{currentQuestion.Description}</p>
            {!result ? (
            <div id="AnswerButtons">
            <Button variant="contained" id="WhiteButton" onClick={this.handleClickYes}>Yes</Button>
            <Button variant="contained" id="WhiteButton-left" onClick={this.handleClickNo}>No</Button> 
            </div>)
            : <div></div>
            }
          </div>
        }
        
        
      </div>
    )
  }
}

// class Questions {
//   constructor() {
//     this.root = null;
//   }
// }

// class Question {
//   constructor(id, title, type, description, yes, no) {
//     this.id = id
//     this.Title = title
//     this.description = description
//     this.type = type
//     this.yes = null
//     this.no = null
//   }
// }
