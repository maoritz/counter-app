import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  constructor() {
    super();
    console.log("app- constructor");
  }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const filteredCounters = this.state.counters.filter(counter => {
      return counter.id !== counterId;
    });
    this.setState({
      counters: filteredCounters
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="row">
          <div className="col-5">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
