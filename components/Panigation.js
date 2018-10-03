import React from 'react';

class Panigation extends React.Component{
    constructor(){
        super();

        this.state={
            pagin:[1,2,3,4,5,6,7,8,9,10],
            page:1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e,newIndex){
        console.log(newIndex);

        
    }
    render(){
        return(
            <div className="pagination">
            <ul>
                <li><a href="#">&laquo;</a></li>
                {this.state.pagin.map((pagin,index)=>{
                    const newIndex =index +1;
                    const active = this.props.page === newIndex ? 'active' : '';
                    return(
                        <li className={"pagination"+active} key={index} onClick={(()=>{this.props.getData(newIndex)})}>
                           <a href="#">{pagin}</a>
                        </li>
                    )
                })}
                <li><a href="#">&raquo;</a></li>
                </ul>
            </div>
        )
    }
}
export default Panigation