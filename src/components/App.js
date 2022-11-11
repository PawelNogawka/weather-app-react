import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
const API_KEY = "ccaf29f547422e6379c2954ba511e495";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.length > 1) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`;
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("something went wrong");
        })
        .then((response) => response.json())
        .then((data) => {
          const date = new Date().toLocaleString();
          this.setState({
            date: date,
            city: this.state.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
          });
        })
        .catch((err) => {
          this.setState({
            err: true,
            city: this.state.value,
          });
        });
    } else {
      alert("too short city name");
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleSubmit}
          />
          <Result state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
