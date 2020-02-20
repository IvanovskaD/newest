import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import {User} from './User';
import {Users} from './Users'
import axios from 'axios';

export class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      podatoci:[]
    }
  }
componentDidMount(){
  // ova ne e nasa funkcija, ova e del of lifecycle
  this.getUsers();
}


getUsers = () => {
  // fetch(`https://jsonplaceholder.typicode.com/users`)
  // .then(res=>res.json())
  // .then(data=>{
    // console.log(data)
    // you can use console.table(data) za polesno da se vidi datata
  // })
  // .catch(err=>{
  //   console.error("Ima greska tuka =>",err);
  // })
  axios({
    url: `https://jsonplaceholder.typicode.com/users`,
    method: 'GET'
  }).then(res=>{
    this.setState({
      podatoci:res.data
    })
    // console.log(res.data);
  }).catch(err=>{
    console.error(err);
  })
}

  render(){
    console.log(this.state);
    return(
      <div>
        <ul>
          <li>
            <Link to="/user">User</Link>
           
          </li>
          <li>

          <Link to="/users"> Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path = "/user" component={User} />
          <Route exact path = "/users" render={()=>{
            return <Users userList={this.state.podatoci}/>
          }}/>

          {/* nikogas ne go ostavaj so golema components poso nema da raboti!; /users ni ja dava tocnata pateka */}

        </Switch>
        {/* <button onClick={()=>{this.getUsers()}}>Povikaj Useri</button> */}
      </div>
    )
  }
}