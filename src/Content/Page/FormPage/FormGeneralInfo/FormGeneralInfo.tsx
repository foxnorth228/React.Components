import React from 'react';
import './FormGeneralInfo.css';

class FormGeneralInfo extends React.Component {
  render() {
    const a = new Date().toISOString().slice(0, 10);
    return (
      <div className="generalInfo">
        <label className="formName">
          Name of the project
          <input type="text" name="name" placeholder="Name of project..."></input>
        </label>
        <label className="formCost">
          Proposed payment
          <input type="number" name="cost" placeholder="How much money you offer..."></input>
        </label>
        <label className="formEmail">
          Contact Information
          <input type="email" name="contact" placeholder="Your contact email..."></input>
        </label>
        <label className="formDeadline">
          Deadline
          <input type="date" value={a} min={a}></input>
        </label>
      </div>
    );
  }
}

export default FormGeneralInfo;
