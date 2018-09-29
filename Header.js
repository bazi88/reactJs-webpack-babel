import React from "react";
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header>
                <ul className="listHeader">
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/chat'>Chat</Link></li>
                </ul>
            </header>
        )
    }
}
export default Header;