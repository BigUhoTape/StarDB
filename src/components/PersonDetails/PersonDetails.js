import React from "react";
import SwapiService from "../../services/SwapiService";

import './PersonDetails.css';

import Spiner from "../Spiner/Spiner";
import ErrorButton from "../ErrorButton/ErrorButton";

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

    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    const { image } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={ image }
             alt="person"
        />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
          <ErrorButton/>
        </div>
      </div>
    );
  }
}
