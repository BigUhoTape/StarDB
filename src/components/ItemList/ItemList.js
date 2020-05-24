import React from "react";
import Spiner from "../Spiner/Spiner";

import './ItemList.css';

export default class ItemList extends React.Component {

  state = {
    peopleList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((peopleList) => {
        this.setState({ peopleList });
      })
  }

  renderItems = arr => {
    return arr.map((item) => {
      const { id } = item;

      const label = this.props.children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          { label }
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spiner/>
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        { items }
      </ul>
    );
  }
}
