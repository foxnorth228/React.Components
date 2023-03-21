import React from 'react';
import './FormLangInfo.css';

class FormLangInfo extends React.Component {
  render() {
    return (
      <fieldset className="formLangInfo">
        <legend>Select programming language</legend>
        <label>
          Javascript
          <input name="lang" value="js" type="radio"></input>
        </label>
        <label>
          C#
          <input name="lang" value="csharp" type="radio"></input>
        </label>
        <label>
          Typescript
          <input name="lang" value="ts" type="radio"></input>
        </label>
        <label>
          Java
          <input name="lang" value="java" type="radio"></input>
        </label>
      </fieldset>
    );
  }
}

export default FormLangInfo;
