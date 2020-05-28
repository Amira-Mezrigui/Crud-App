import React,{Component} from 'react';
import axios from 'axios'


class List extends React.Component {
    constructor() {
        super();
        this.state={
            users:[]
        };

      }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            this.setState({users:response.data})
            console.log(response.data)
            

        })
        
    }
    render() {
      return(
      <div>
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
         <tr>
         <td>{x.name}</td>
         <td>{x.username}</td>
         <td>
           <button>Edit</button>
           <button>Delete</button>
         </td>
       </tr>)
        })}
      
      
    </tbody>
  </table>
      </div>)
    }
  }


export default List