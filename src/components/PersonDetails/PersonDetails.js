import React from "react";
import SwapiService from "../../services/SwapiService";

import './PersonDetails.css';

import Spiner from "../Spiner/Spiner";
import ErrorButton from "../ErrorButton/ErrorButton";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};
export {
  Record
};

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    image: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) { // обязательно!!! потому что setstate в свою очерьдь вызывает componentDidUpdate и будет зацикливание
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId, getData, getImageUrl } = this.props;

    if (personId === null) {
      return;
    }

    getData(personId)
      .then(person => {
        this.setState({
          person,
          image: getImageUrl(person)
        })
      })
  };

  render() {
    if (this.state.person === null) {
      return <span>Select a item from list.</span>
    }

    // if (this.props.personId !== this.state.person.id) {
    //   return <Spiner/>
    // }

    const { person } = this.state;
    const { image } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={ image }
             alt="person"
        />

        <div className="card-body">
          <h4>{ person.name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child, index) => {
                return React.cloneElement(child, { item: person });
              })
            }
          </ul>
          <ErrorButton/>
        </div>
      </div>
    );
  }
}
