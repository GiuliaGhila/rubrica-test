
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
      utente: {},
      navOpen: true
    };
  }

  componentDidMount () {
    axios.get('http://localhost:8080/users/' + this.props.match.params.id)
  .then((response) => {
    // handle success
    console.log(response.data.data);
    this.setState({utente: response.data });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  cancella () {
    axios.delete('http://localhost:8080/users/' + this.props.match.params.id)
  .then((response) => {
    // handle success
    console.log(response.data.data);
    this.setState({cancellato: true });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  render() {

    if(this.state.cancellato) return (
      <Redirect to={"/users/"}/>
    );

      return(
        <><div> mi presento sono  {this.state.utente.nome} {this.state.utente.cognome} </div>
           <div onClick={() => {this.cancella()}}> cancella </div>
          <Link to={"/users/" + this.props.match.params.id + "/edit"}>
          <div> modifica  </div>
                      </Link>
          


          {/* <div> <img src={this.state.utente.avatar} alt="" /> </div> */}
          {/* <div> {this.state.utente.email} </div> */}
                    
        </>

      );
  }
}

export default About;
