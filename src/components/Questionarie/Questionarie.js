import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/Header.js';

export default class Questionarie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: null,
      questionId: 1,
      results: [],
      result: false
    }

    this.handleClickOption1 = this.handleClickOption1.bind(this);
    this.handleClickOption2 = this.handleClickOption2.bind(this);
  }

  handleClickOption1() {
    const {currentQuestion, questionId} = this.state
    var nextQuestion = currentQuestion.Option1;
    console.log(nextQuestion);
    if (nextQuestion.id === -1) {
      this.setState({results:currentQuestion.Option1.Results, result: true})
    } else {
      this.setState({currentQuestion:currentQuestion.Option1, questionId:questionId*10+1})
    }
  }

  handleClickOption2() {
    const {currentQuestion, questionId} = this.state
    var nextQuestion = currentQuestion.Option2;
    if (nextQuestion.id === -1) {
      this.setState({results:currentQuestion.Option2.Results, result: true})
    } else {
      this.setState({currentQuestion:currentQuestion.Option2, questionId:questionId*10})
    }
  }
  
  componentDidMount() {
    var result = require('../../shared/questions.json');
    this.setState({currentQuestion: result.questionTree})
  }

  render() {
    const {results, currentQuestion, result} = this.state
    return (
      <div class="MainContent">
        {currentQuestion != null ?
          (!result ? 
            (
            <div>
              <h3>{currentQuestion.Title}</h3>
              <p>{currentQuestion.Description}</p>
              <div id="AnswerButtons">
                <Button style={{ textDecoration: 'none', fontSize:'14px'}} variant="contained" id="WhiteButton" onClick={this.handleClickOption1}>{currentQuestion.Options[0]}</Button>
                <Button style={{ textDecoration: 'none', fontSize:'14px'}} variant="contained" id="WhiteButton-left" onClick={this.handleClickOption2}>{currentQuestion.Options[1]}</Button> 
              </div>
            </div>
            ) : (
            <div>
              {results[1] != null ? (
                  <div id="ResultCard">
                    <div class="col-sm-6">
                      <h3>{results[0].Title}</h3>
                      <p id="Description">{results[0].Description}</p>
                      {results[0].Links[0] != null ? 
                        <div>
                          <iframe id="videoFrame" width="70%" height="300px" src={results[0].Links[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> : <div />
                      }
                    </div>
                    <div class="col-sm-6">
                      <h3>{results[1].Title}</h3>
                      <p id="Description">{results[1].Description}</p>
                      {results[1].Links[0] != null ? 
                        <div>
                          <iframe id="videoFrame" width="70%" height="300px" src={results[1].Links[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> : (<div />)
                      }
                    </div>
                  </div>) : (
                    <div id="ResultCard">
                      <div>
                        <h3>{results[0].Title}</h3>
                        <p id="Description">{results[0].Description}</p>
                        {results[0].Links[0] != null ? 
                          <div>
                            <iframe id="videoFrame" width="40%" height="300px" src={results[0].Links[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div> : <div />
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            )
          ) : <div> Error Questions not Found </div>
      }
      </div>
    )
  }
}