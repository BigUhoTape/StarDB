import React from "react";

import './ErrorButton.css';

export default class ErrorButton extends React.Component{
  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.bar.foo = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
