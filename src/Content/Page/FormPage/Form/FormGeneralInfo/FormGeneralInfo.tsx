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

function FormGeneralInfo({ errors, refName, refCost, refMail, refDate }: IFormGeneralInfo) {
  function checkNameError() {
    switch (errors.name) {
      case 1:
        return <span className="errorMessage">{"Name can'n be empty"}</span>;
      default:
        return null;
    }
  }

  function checkCostError() {
    switch (errors.cost) {
      case 1:
        return <span className="errorMessage">{"Cost can'n be empty"}</span>;
      case 2:
        return <span className="errorMessage">{'Cost must be a number'}</span>;
      default:
        return null;
    }
  }

  function checkMailError() {
    switch (errors.mail) {
      case 1:
        return <span className="errorMessage">{"Email can'n be empty"}</span>;
      case 2:
        return <span className="errorMessage">{'Email must be correct'}</span>;
      default:
        return null;
    }
  }

  const a = new Date().toISOString().slice(0, 10);
  return (
    <div className="generalInfo">
      <label className="formName">
        Name of the project
        <input ref={refName} type="text" name="name" placeholder="Name of project..."></input>
      </label>
      {checkNameError()}
      <label className="formCost">
        Proposed payment
        <input
          ref={refCost}
          type="number"
          name="cost"
          placeholder="How much money you offer..."
        ></input>
      </label>
      {checkCostError()}
      <label className="formEmail">
        Contact Information
        <input
          ref={refMail}
          type="email"
          name="contact"
          placeholder="Your contact email..."
        ></input>
      </label>
      {checkMailError()}
      <label className="formDeadline">
        Deadline
        <input ref={refDate} type="date" defaultValue={a} min={a}></input>
      </label>
    </div>
  );
}

export default FormGeneralInfo;
