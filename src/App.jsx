
import axios from 'axios';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import User from "./User"
import NewUser from "./NewUser";
import Users from "./Users";
import Edit from "./Edit";

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      utenti: [],
      navOpen: true,
      nome: "simone",
    };
  }

  

  render() {
      return (
          <div className="container-flex body"><Router>
          <div>
            
    
            <div className="row nav">
              <div className="col-auto" onClick= {() => {this.setState ({navOpen: !this.state.navOpen })}} ><i className="fas fa-bars"></i></div>
              <div className="col text-center">logo</div>
              <div className="col-auto" ><i className="fas fa-user"></i> </div>
            </div>
            <div className="row body">
              {
                this.state.navOpen?
                <div className="col-2 menu-laterale"><nav>
                    <Link to="/">
                      <div className="menu-button">
                      Home</div>
                      </Link>
                    
                    <Link to="/users"><div className="menu-button">
                      User</div></Link>
                    <Link to="/users/new"><div className="menu-button">
                      New User</div></Link>
                    

              </nav></div> : null
              }
              <div className="col body">
              <Switch>
                   

              <Route path="/users/new" component={NewUser}/>      
              
              <Route path="/users/:id/edit" component={Edit}/>
              
              <Route path="/users/:id" component={User}/>


              <Route path="/users"  component={Users}/>

              <Route path="/">
                funzione !          
              </Route>
            </Switch>
              </div>
              
            </div>
            
          </div>
        </Router>
            
          
          </div>
    );
  }
}

export default App;
