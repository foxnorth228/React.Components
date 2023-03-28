import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IErrorValidiry } from '../Form';
import './FormGeneralInfo.css';

interface IFormGeneralInfo {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

function FormGeneralInfo({ register, errors }: IFormGeneralInfo) {
  // function checkNameError() {
  //   switch (errors.name) {
  //     case 1:
  //       return <span className="errorMessage">{"Name can'n be empty"}</span>;
  //     default:
  //       return null;
  //   }
  // }

  // function checkCostError() {
  //   switch (errors.cost) {
  //     case 1:
  //       return <span className="errorMessage">{"Cost can'n be empty"}</span>;
  //     case 2:
  //       return <span className="errorMessage">{'Cost must be a number'}</span>;
  //     default:
  //       return null;
  //   }
  // }

  // function checkMailError() {
  //   switch (errors.mail) {
  //     case 1:
  //       return <span className="errorMessage">{"Email can'n be empty"}</span>;
  //     case 2:
  //       return <span className="errorMessage">{'Email must be correct'}</span>;
  //     default:
  //       return null;
  //   }
  // }

  const a = new Date().toISOString().slice(0, 10);
  console.log(errors);
  return (
    <div className="generalInfo">
      <label className="formName">
        Name of the project
        <input type="text" placeholder="Name of project..." {...register('name')}></input>
      </label>
      {/* {checkNameError()} */}
      <label className="formCost">
        Proposed payment
        <input
          type="number"
          placeholder="How much money you offer..."
          {...register('cost', {
            required: 'Value must be a string and not empty',
            valueAsNumber: true,
          })}
        ></input>
      </label>
      {errors.cost && <p>{errors.cost.message as string}</p>}
      <label className="formEmail">
        Contact Information
        <input type="email" placeholder="Your contact email..." {...register('mail')}></input>
      </label>
      {/* {checkMailError()} */}
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
