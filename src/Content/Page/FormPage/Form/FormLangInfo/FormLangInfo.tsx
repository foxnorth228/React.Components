import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './FormLangInfo.css';

function FormLangInfo({ register }: { register: UseFormRegister<FieldValues> }) {
  return (
    <fieldset className="formLangInfo" name="lang">
      <legend>Select programming language</legend>
      <label>
        Javascript
        <input value="js" type="radio" defaultChecked {...register('lang')}></input>
      </label>
      <label>
        C#
        <input value="csharp" type="radio" {...register('lang')}></input>
      </label>
      <label>
        Typescript
        <input value="ts" type="radio" {...register('lang')}></input>
      </label>
      <label>
        Java
        <input value="java" type="radio" {...register('lang')}></input>
      </label>
    </fieldset>
  );
}

export default FormLangInfo;
