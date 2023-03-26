import React from 'react';
import './FormGeneralInfo.css';

interface IFormGeneralInfo {
  refName: React.RefObject<HTMLInputElement>;
  refCost: React.RefObject<HTMLInputElement>;
  refMail: React.RefObject<HTMLInputElement>;
  refDate: React.RefObject<HTMLInputElement>;
}

class FormGeneralInfo extends React.Component<IFormGeneralInfo, object> {
  constructor(props: IFormGeneralInfo) {
    super(props);
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
        <label className="formCost">
          Proposed payment
          <input
            ref={this.props.refCost}
            type="number"
            name="cost"
            placeholder="How much money you offer..."
          ></input>
        </label>
        <label className="formEmail">
          Contact Information
          <input
            ref={this.props.refMail}
            type="email"
            name="contact"
            placeholder="Your contact email..."
          ></input>
        </label>
        <label className="formDeadline">
          Deadline
          <input ref={this.props.refDate} type="date" defaultValue={a} min={a}></input>
        </label>
      </div>
    );
  }
}

export default FormGeneralInfo;
