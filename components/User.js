import React from 'react';
import Panigation from './Panigation';

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            user:[],
            page:'1'
        }
        this.handleClick = this.handleClick.bind(this);
        this.getData =this.getData.bind(this);
        this.fetch =this.fetch.bind(this);
    }
    getData(pages){
        console.log(pages);
        this.setState({
            page:pages
        })
        this.fetch(this.state.page);
            
    }
    fetch(page){
        console.log(page);
        fetch('https://randomuser.me/api/?page=${this.state.page}&results=30&seed=abc')
            .then(result =>{
                return(result.json());
            }).then(data=>{
                console.log(data);
                let user = data.results.map((users,index)=>{
                    return(
                        <div key={index} className="list-user">
                            <div className="user-name">{users.name.title}</div>
                        </div>   
                    )
                })
                this.setState({user:data.results})
            })   
        }
        
    componentDidMount(){
        this.getData();
    }
    handleClick(users){
    }
    render(){
        return(
            <div>
            <table className="list-user">
                <thead>
                        <tr className="header">
                            <th>thumbnail</th>
                            <th>title</th>
                            <th>name</th>
                            <th>gender</th>
                            <th>email</th>
                            <th>age</th>
                            <th>nat</th>
                            <th>phone</th>
                            <th>city</th>
                            <th>state</th>
                            <th>street</th>
                        </tr>
                </thead>
                <tbody>
            {this.state.user.map((users,index)=>{
                return(
                        <tr key={index} onClick={()=>{this.handleClick(users)}}>
                            <td><img src={users.picture.thumbnail} /></td>
                            <td>{users.name.title}</td>
                            <td>{users.name.first}{' '}{users.name.last}</td>
                            <td>{users.gender}</td>
                            <td>{users.email}</td>
                            <td>{users.dob.age}</td>
                            <td>{users.nat}</td>
                            <td>{users.phone}</td>
                            <td>{users.location.city}</td>
                            <td>{users.location.state}</td>
                            <td>{users.location.street}</td>
                            </tr>
                )
            })}
            </tbody>
            </table>
            <Panigation page={this.state.page} getData={this.getData}/>
        </div>
        )
    }
}
export default User
