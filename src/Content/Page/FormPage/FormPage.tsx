import React from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import './FormPage.css';

// buy a program from freelance
class FormPage extends React.Component {
  render() {
    return (
      <div className="formPage">
        <div className="form">
          <FormGeneralInfo />
          <FormProjectType />
          <FormLangInfo />
          <label className="formVert formFile">
            Choose sample image
            <input className="formFileI" type="file" accept="image/png, image/jpeg"></input>
          </label>
          <label className="formFile">
            Prepaymant
            <input type="checkbox"></input>
          </label>
          <input className="formFile" type="submit" value="Send Request"></input>
        </div>
      </div>
    );
  }
}

export default FormPage;
