import React, { Component } from 'react';
import axios from 'axios';

class GameFront extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datas: '',
      cards: '',
      posts: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001')
      .then(response => {
        console.log(response)
        console.log(response.data)
        this.setState({datas: response.data})
      })
      .catch(error => {
        console.log(error)
      })

      axios.get('http://localhost:3001/cards')
        .then(response => {
          console.log(response)
          console.log(response.data)
          this.setState({cards: response.data})
        })
        .catch(error => {
          console.log(error)
        })

    axios.post('http://localhost:3001/play', 'just a string',
      {
        headers: {
          'playerID': 'abc123'
        }
      }
    )
      .then(response => {
        console.log(response)
        console.log(response.data)
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { datas } = this.state
    const { cards } = this.state
    const { posts } = this.state
    return (
      <div>
      hi2
        {datas}
        {cards}
        {posts}
      </div>
    )
  }
}

export default GameFront
