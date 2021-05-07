import React, { Component } from 'react';
import axios from 'axios';

class GameFront extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datas: '',
      cards: '',
      posts: '',
      hand: '',
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

  resetDeck() {
    axios.get('http://localhost:3001/resetDeck',
      {

      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  drawHand() {
    axios.get('http://localhost:3001/drawPlayerHand',
      {

      }
    )
    .then(response => {
      console.log(response)
      this.setState({hand: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }



  render() {
    const { datas } = this.state
    const { cards } = this.state
    const { posts } = this.state
    const { hand } = this.state
    return (
      <div>
          <label for="suit">Suit:</label>
          <input type="number" id="suit" name="suit"/>
          <label for="value">Value:</label>
          <input type="number" id="value" name="value"/>
          <button onClick={() => this.testPost()} id="testPost" className="runButton">Post</button>

          <button onClick={() => this.resetDeck()} id="resetDeck">Reset Deck</button>

          <button onClick={() => this.drawHand()} id="drawHand">Draw Hand</button>

          {hand}
      </div>
    )
  }
}

export default GameFront
