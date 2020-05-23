import React from "react";
import SwapiService from "../../services/SwapiService";

import './PersonDetails.css';

import Spiner from "../Spiner/Spiner";
import ErrorButton from "../ErrorButton/ErrorButton";

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null
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
    const { personId } = this.props;

    if (personId === null) {
      return;
    }

    this.swapiService.getPerson(personId)
      .then(person => {
        this.setState({ person })
      })
  };

  render() {
    if (!this.state.person) {
      return <span>Select a person from list.</span>
    }

    if (this.props.personId !== this.state.person.id) {
      return <Spiner/>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
