import React, { Component } from 'react';
import axios from 'axios';

class GameFront extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datas: '',
      cards: '',
      posts: '',
      card: {
        suit: props.suit,
        value: props.value
      }
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

  }

  testPost() {

    var suit = parseInt(document.getElementById('suit').value);
    var value = parseInt(document.getElementById('value').value);
    console.log("HELLO");
    console.log(suit);
    console.log(value);


    const json = JSON.stringify({"Suit":suit,"Value":value})
    console.log(json)
    axios.post('http://localhost:3001/play', json,
      {
        headers: {
          'playerID': 'abc123',
          'Content-Type': 'application/json'
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
      hi3
        {datas}
        {cards}
        {posts}

          <label for="suit">Suit:</label>
          <input type="number" id="suit" name="suit"/>
          <label for="value">Value:</label>
          <input type="number" id="value" name="value"/>

        <button onClick={() => this.testPost()} id="testPost" className="runButton">Post</button>

      </div>
    )
  }
}

export default GameFront
