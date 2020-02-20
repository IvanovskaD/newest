import React from 'react';
import axios from 'axios';

export class User extends React.Component {

    constructor(props){
        super(props)

        this.state={
            podatoci: []
        }
    }

    componentDidMount () {
        this.getUsers();
    }

    getUsers = () => {
        axios({
            url:'https://jsonplaceholder.typicode.com/users',
            method: 'GET'

        
    }).then(res=>{
        this.setState({
            podatoci:res.data
        })
    }).catch(err=>{
        console.error(err)
    })
}
    render(){
        return(

            this.state.podatoci.length>0 ?
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.podatoci.map(user=>{
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h2>Loading...</h2>
        )
    }
}