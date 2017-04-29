import React, { Component, PropTypes } from 'react';
import axios from 'axios';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: '',
    }
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  grabName(e){
    this.setState({
      search: e.target.value
    })
  }

  getWeather(){
    axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&APPID=2eacf5cd8e08d4adc524186577921400`)
    .then((data) => {
      debugger;
      console.log(data);
    })
  }
  //
  // 2eacf5cd8e08d4adc524186577921400


  render() {
    return (
      <div>
        <h1>Search for City Weather </h1>
        <input placeholder="City Name" onChange={(e)=>this.grabName(e)}></input><input type='submit' placeholder='search' onClick={()=>this.getWeather()}></input>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
