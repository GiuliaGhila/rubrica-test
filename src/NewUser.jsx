
import axios from 'axios';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

class About extends Component {

  constructor (props) {
    super(props)
    this.state = {

        nome: "",
        cognome:"",
        email:"",
        navOpen: true,
        id:"",
    };
  }

  crea () {
    axios.post('http://localhost:8080/users/', {nome: this.state.nome, cognome: this.state.cognome, email: this.state.email})
  .then((response) => {
    // handle success
    console.log(response.data);
    this.setState({saved: true, id:response.data.id});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  render() {

    if(this.state.saved) return (
      <Redirect to={"/users/" + this.state.id}/>
    );
    

      return(
        <><div> inserisci il nome </div>
        <input type="text" value={this.state.nome} onChange={(e) => {this.setState({ nome:e.target.value})}}/>

        <div> inserisci il cognome </div>
        <input type="text" value={this.state.cognome} onChange={(e) => {this.setState({ cognome:e.target.value})}}/>

        <div> inserisci la tua emial </div>
        <input type="text" value={this.state.email} onChange={(e) => {this.setState({ email:e.target.value})}}/>

        {
          (this.state.nome && this.state.cognome && this.state.email)?
          <div className="menu-button" onClick={() => {this.crea()}}>crea</div> 
          :null

        }

          {/* <div> <img src={this.state.utente.avatar} alt="" /> </div> */}
          {/* <div> {this.state.utente.email} </div> */}
                    
        </>

      );
  }
}

export default About;
