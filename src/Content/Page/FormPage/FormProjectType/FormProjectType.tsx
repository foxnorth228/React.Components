import React from 'react';
import './FormProjectType.css';

class FormProjectType extends React.Component<
  { refPr: React.RefObject<HTMLSelectElement> },
  object
> {
  render() {
    return (
      <>
        <label className="formProjectType">
          Choose project type...
          <select defaultValue={'FrontEnd'} required ref={this.props.refPr}>
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
