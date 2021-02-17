
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import './index.css';
//import store from './app/store';
import { Provider } from 'react-redux';
import store  from './Store/index'

import Formulary from './Pages/Formulary/Formulary';
import ThemeChoose from './Pages/ThemeChoose/ThemeChoose';
import ColorChoose from './Pages/ColorChoose/ColorChoose';
import AccuracyQuestions from './Pages/AccuracyQuestions/AccuracyQuestions';
import QualitativeQuestions from './Pages/QualitativeQuestions/QualitativeQuestions';




//import Routes from '../src/Routes/Routes'


ReactDOM.render(
  <React.StrictMode>
     
      <Provider store={store}> 

         <BrowserRouter>
            <Switch>
               <Route path="/" component={Formulary} exact={true}/>
               <Route path="/tema" component={ThemeChoose} exact={true}/>
               <Route path="/color" component={ColorChoose} exact={true}/>
               <Route path="/questao_1" component={AccuracyQuestions} exact={true}/>
               <Route path="/questao_2" component={QualitativeQuestions} exact={true}/>
            </Switch>
         </BrowserRouter>

      </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

