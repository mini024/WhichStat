import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header';
import TestButton from './components/Home/Home';
import Questionarie from './components/Questionarie/Questionarie';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const HomeComponent = (props) => {
            return (
                <TestButton />
            );
        }

        const QuestionarieComponent = (props) => {
            return (
                <div>
                    <Header />
                    <Questionarie />
                </div>

            );
        }

        return(
            <div className="main-container">
                <Switch>
                    <Route exact path='/' component= {HomeComponent} />
                    <Route path='/questions' component= {QuestionarieComponent}/>
                    <Route path='/About' render= {HomeComponent} />
                </Switch>
            </div>
        );
    }

}

export default Main;