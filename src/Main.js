import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Questionarie from './components/Questionarie/Questionarie';
import About from './components/About/About';
import Glossary from './components/Glossary/Glossary';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const HomeComponent = (props) => {
            return (
                <div>
                    <Header />
                    <Home />
                </div>
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

        const AboutComponent = (props) => {
            return (
                <div>
                    <Header />
                    <About /> 
                </div>
            ); 
        }

        const GlossaryComponent = (props) => {
            return (
                <div>
                    <Header />
                    <Glossary /> 
                </div>
            ); 
        }

        return(
            <div className="main-container">
                <Switch>
                    <Route exact path='/' component= {HomeComponent} />
                    <Route path='/questions' component= {QuestionarieComponent}/>
                    <Route path='/about' render= {AboutComponent} />
                    <Route path='/glossary' render= {GlossaryComponent} />
                </Switch>
            </div>
        );
    }

}

export default Main;