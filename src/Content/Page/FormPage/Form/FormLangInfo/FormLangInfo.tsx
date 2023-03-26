import React from 'react';
import './FormLangInfo.css';

class FormLangInfo extends React.Component<
  {
    refLang: React.RefObject<HTMLInputElement>[];
  },
  object
> {
  render() {
    return (
      <fieldset className="formLangInfo" name="lang">
        <legend>Select programming language</legend>
        <label>
          Javascript
          <input
            ref={this.props.refLang[0]}
            name="lang"
            value="js"
            type="radio"
            defaultChecked
          ></input>
        </label>
        <label>
          C#
          <input ref={this.props.refLang[1]} name="lang" value="csharp" type="radio"></input>
        </label>
        <label>
          Typescript
          <input ref={this.props.refLang[2]} name="lang" value="ts" type="radio"></input>
        </label>
        <label>
          Java
          <input ref={this.props.refLang[3]} name="lang" value="java" type="radio"></input>
        </label>
      </fieldset>
    );
  }
}

export default FormLangInfo;
