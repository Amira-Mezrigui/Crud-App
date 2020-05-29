import React,{Component} from 'react';
import axios from 'axios'


class List extends React.Component {
    constructor() {
        super();
        this.state={
            users:[],
            name:"",
            userName:""
        };

      }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            this.setState({users:response.data})
            console.log(response.data)
        })   
    }
    //Adding delete request
    removeUser = (x) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${x.id}`)
          .then(res => {
            
            console.log(res.data);
          })
      }
    
    // Adding a Post Request
    handleNameChange = event => {
        this.setState({ name: event.target.value });
      }
    handleUserNameChange = event => {
        this.setState({ userName: event.target.value });
      }
    addUser = event => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", {
            "name": this.state.name,
            "username": this.state.userName,
            "email": "Sincere@april.biz"
            
              
        })
          .then(response =>{
            console.log(response.data)
        })
      }

    render() {
      return(
      <div>
          <form>
            <label> Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label> UserName:
            <input type="text" name="username" value={this.state.userName} onChange={this.handleUserNameChange} />
            </label>
          <button type="submit" onClick={this.addUser}>Add</button>
        </form>
          <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {this.state.users.map(x=>{
            return(
         <tr key={x.id}>
         <td>{x.name}</td>
         <td>{x.username}</td>
         <td>
           <button>Edit</button>
           <button onClick={()=>this.removeUser(x)}>Delete</button>
         </td>
       </tr>)
        })}
      
      
    </tbody>
  </table>
      </div>)
    }
  }


export default List