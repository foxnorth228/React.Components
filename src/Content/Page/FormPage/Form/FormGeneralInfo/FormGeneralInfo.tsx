import React from 'react';
import { IErrorValidiry } from '../Form';
import './FormGeneralInfo.css';

interface IFormGeneralInfo {
  errors: IErrorValidiry;
  refName: React.RefObject<HTMLInputElement>;
  refCost: React.RefObject<HTMLInputElement>;
  refMail: React.RefObject<HTMLInputElement>;
  refDate: React.RefObject<HTMLInputElement>;
}

class FormGeneralInfo extends React.Component<IFormGeneralInfo, object> {
  constructor(props: IFormGeneralInfo) {
    super(props);
    this.checkNameError = this.checkNameError.bind(this);
  }

  checkNameError() {
    switch (this.props.errors.name) {
      case 1:
        return <span className="errorMessage">{"Name can'n be empty"}</span>;
      default:
        return null;
    }
  }

  checkCostError() {
    switch (this.props.errors.cost) {
      case 1:
        return <span className="errorMessage">{"Cost can'n be empty"}</span>;
      case 2:
        return <span className="errorMessage">{'Cost must be a number'}</span>;
      default:
        return null;
    }
  }

  checkMailError() {
    switch (this.props.errors.mail) {
      case 1:
        return <span className="errorMessage">{"Email can'n be empty"}</span>;
      case 2:
        return <span className="errorMessage">{'Email must be correct'}</span>;
      default:
        return null;
    }
  }
  render() {
    const a = new Date().toISOString().slice(0, 10);
    return (
      <div className="generalInfo">
        <label className="formName">
          Name of the project
          <input
            ref={this.props.refName}
            type="text"
            name="name"
            placeholder="Name of project..."
          ></input>
        </label>
        {this.checkNameError()}
        <label className="formCost">
          Proposed payment
          <input
            ref={this.props.refCost}
            type="number"
            name="cost"
            placeholder="How much money you offer..."
          ></input>
        </label>
        {this.checkCostError()}
        <label className="formEmail">
          Contact Information
          <input
            ref={this.props.refMail}
            type="email"
            name="contact"
            placeholder="Your contact email..."
          ></input>
        </label>
        {this.checkMailError()}
        <label className="formDeadline">
          Deadline
          <input ref={this.props.refDate} type="date" defaultValue={a} min={a}></input>
        </label>
      </div>
    );
  }
}

export default FormGeneralInfo;
