import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './FormGeneralInfo.css';

interface IFormGeneralInfo {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

function FormGeneralInfo({ register, errors }: IFormGeneralInfo) {
  const a = new Date().toISOString().slice(0, 10);
  return (
    <div className="generalInfo">
      <label className="formName">
        Name of the project
        <input
          type="text"
          placeholder="Name of project..."
          {...register('name', { required: "Name can't be empty" })}
        ></input>
      </label>
      {errors.name && <span className="errorMessage">{errors.name.message as string}</span>}
      <label className="formCost">
        Proposed payment
        <input
          type="number"
          placeholder="How much money you offer..."
          {...register('cost', {
            required: 'Cost must be a number and not empty',
            valueAsNumber: true,
          })}
        ></input>
      </label>
      {errors.cost && <span className="errorMessage">{errors.cost.message as string}</span>}
      <label className="formEmail">
        Contact Information
        <input
          type="email"
          placeholder="Your contact email..."
          {...register('mail', { required: "Mail can't be empty" })}
        ></input>
      </label>
      {errors.mail && <span className="errorMessage">{errors.mail.message as string}</span>}
      <label className="formDeadline">
        Deadline
        <input
          type="date"
          defaultValue={a}
          min={a}
          {...register('date', { valueAsDate: true })}
        ></input>
      </label>
    </div>
  );
}

export default FormGeneralInfo;
