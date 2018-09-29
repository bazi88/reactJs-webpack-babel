import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

class Layout extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Main />
            </div>
        )
    }
}
export default Layout;