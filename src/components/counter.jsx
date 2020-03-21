import React, { Component } from "react";

class Counter extends Component {
  formatCount = () =>
    this.props.counter.value === 0 ? "Zero" : this.props.counter.value;

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </button>
          <button
            disabled={this.props.counter.value === 0 ? true : false}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2 "
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
