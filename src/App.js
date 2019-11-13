import React, {Component} from 'react';
import './App.css'
import faker from 'faker';

class App extends Component {
    state = {
        hasErrors: false,
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/users/')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
                console.log(this.state.users)
            })
            .catch(console.log)
        }

    // {JSON.stringify(this.state.users)}}
    render() {
      return (
        <div className="container">
         <div className="col-xs-12">

         {this.state.users.map((user) => (
           <div className="card">
             <div className="card-body">
               <h5 className="card-title">Name: {user.name}</h5>
               <h5 className="card-title">Age: {user.age}</h5>
               <h5 className="card-title">City: {user.city}</h5>
               
             </div>
           </div>
         ))}
         </div>
        </div>
     );
    }
}

export default App;