import React, {Component} from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  onIncrement() {
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    }, () => {
      console.log('callback')
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.onIncrement()}>Increment</button>
      </>

    )
  }
}

export default App