import React from 'react';
import './FormProjectType.css';

class FormProjectType extends React.Component {
  render() {
    return (
      <>
        <label className="formProjectType">
          Choose project type...
          <select>
            <option>FrontEnd</option>
            <option>BackEnd</option>
            <option>Desktop</option>
            <option>Mobile</option>
          </select>
        </label>
      </>
    );
  }
}

export default FormProjectType;
