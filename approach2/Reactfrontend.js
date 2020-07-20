import React, { Component } from "react";
import axios from "axios";

export default class Reactfrontend extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    var url = "https://www.keyforgegame.com/api/decks/59554ab7-b414-4220-8514-408a0dbf572d/";
    var url = "https://joke-api-strict-cors.appspot.com/jokes/random"

    var postData = {};
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios
      //.get(url, axiosConfig )
      .get("http://localhost:3000/jokes/random")
      .then(response => {
        // manipulate the response here
        console.log(response)
      })
      .catch(function (error) {
        // manipulate the error response here
      });
  }
  render() {
    return (
      <div>Please check developer console for URL response getting or not.
        <br /><button onClick={this.handleClick}>check server</button>
      </div>
    );
  }
}