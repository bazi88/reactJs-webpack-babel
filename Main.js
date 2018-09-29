import React from "react";
import { Switch, Route } from 'react-router-dom'

import User from './components/User';
import App from './App';
class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/user' component={User}/>
                <Route path='/chat' component={App}/>
            </Switch>
        )
    }
}
export default Main;