import React, { Component } from 'react';

import Spiner from "../Spiner/Spiner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateList();
      }
    }

    componentDidMount() {
      this.updateList();
    }

    updateList = () => {
      this.setState({
        loading: true,
        error: false
      });
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          })
        })
    };

    render() {
      const { data, error, loading } = this.state;

      if (loading) {
        return <Spiner />;
      }

      if (error) {
        return <ErrorIndicator/>
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
