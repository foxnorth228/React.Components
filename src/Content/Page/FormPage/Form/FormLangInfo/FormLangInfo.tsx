import React from 'react';
import './FormLangInfo.css';

function FormLangInfo({ refLang }: { refLang: React.RefObject<HTMLInputElement>[] }) {
  return (
    <fieldset className="formLangInfo" name="lang">
      <legend>Select programming language</legend>
      <label>
        Javascript
        <input ref={refLang[0]} name="lang" value="js" type="radio" defaultChecked></input>
      </label>
      <label>
        C#
        <input ref={refLang[1]} name="lang" value="csharp" type="radio"></input>
      </label>
      <label>
        Typescript
        <input ref={refLang[2]} name="lang" value="ts" type="radio"></input>
      </label>
      <label>
        Java
        <input ref={refLang[3]} name="lang" value="java" type="radio"></input>
      </label>
    </fieldset>
  );
}

export default FormLangInfo;
