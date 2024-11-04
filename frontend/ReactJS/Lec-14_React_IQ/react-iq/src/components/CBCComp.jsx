import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("class based comp handler");
    console.log(this);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  componentDidMount() {
    console.log("Component get mounted");
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log("Component gets updated, Count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("Component deleted");
  }

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}

export default Counter;
