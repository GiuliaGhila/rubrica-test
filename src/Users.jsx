
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

class About extends Component {

  constructor (props) {
    super(props)
    this.state = {
      utenti: [],
      navOpen: true
    };
  }

  componentDidMount () {
    axios.get('http://localhost:8080/users')
  .then((response) => {
    // handle success
    console.log(response.data.data);
    this.setState({utenti: response.data });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  render() {
      return(
        <>
          
          {this.state.utenti.map((elemento, key) => {
                  return (
                    <div key={key}>
                      <Link to={"/users/" + elemento.id}>
                        <div className="">
                          {elemento.nome}
                       </div>
                      </Link>
                      
                    </div>
                  );
                })}

            
                     
        </>

      );
  }
}

export default About;
