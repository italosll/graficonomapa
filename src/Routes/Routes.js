
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Formulary from './Pages/Formulary/Formulary';
import ThemeChoose from './Pages/ThemeChoose/ThemeChoose';


export default function Routes(props){

    return(

        <Switch>

            <Route path="/" component={Formulary} />
            <Route path="/tema" component={ThemeChoose} exact/>

        </Switch>
    )
}
  

