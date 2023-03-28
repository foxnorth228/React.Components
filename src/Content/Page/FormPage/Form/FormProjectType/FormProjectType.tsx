import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './FormProjectType.css';

function FormProjectType({ register }: { register: UseFormRegister<FieldValues> }) {
  return (
    <>
      <label className="formProjectType">
        Choose project type...
        <select defaultValue={'FrontEnd'} {...register('projectType')}>
          <option>FrontEnd</option>
          <option>BackEnd</option>
          <option>Desktop</option>
          <option>Mobile</option>
        </select>
      </label>
    </>
  );
}

export default FormProjectType;
