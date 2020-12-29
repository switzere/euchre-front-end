import React, { Component } from 'react';
import axios from 'axios';

class GameFront extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datas: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001')
      .then(response => {
        console.log(response)
        console.log(response.data);
        this.setState({datas: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { datas } = this.state
    return (
      <div>
      hi2
        {datas}
      </div>
    )
  }
}

export default GameFront
