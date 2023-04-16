import React from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import { IRefCardList } from '../FormPage';
import { FieldValues, useForm } from 'react-hook-form';
import './Form.css';

export interface IErrorValidiry {
  name: number;
  cost: number;
  mail: number;
  file: number;
}

function Form({ refCardList }: { refCardList: IRefCardList }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  function handleSubmit1(data: FieldValues) {
    if (confirm('Are you sure (data will be saved)?')) {
      refCardList?.current?.createCard({
        name: data.name,
        cost: data.cost,
        mail: data.mail,
        date: data.date.toISOString().slice(0, 10),
        projectType: data.projectType,
        lang: data.lang,
        file: data.sample[0],
        isPrepayment: data.prepayment,
      });
      reset();
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmit1)}>
      <FormGeneralInfo errors={errors} register={register} />
      <FormProjectType register={register} />
      <FormLangInfo register={register} />
      <label className="formVert formFile">
        Choose sample image
        <input
          className="formFileI"
          type="file"
          accept="image/png, image/jpeg"
          {...register('sample', {
            validate: (value) => (value && typeof value[0] !== 'undefined') || 'add file',
          })}
        ></input>
      </label>
      {errors.sample && <span className="errorMessage">{errors.sample.message as string}</span>}
      <label className="formFile">
        Prepaymant
        <input type="checkbox" {...register('prepayment')}></input>
      </label>
      <input className="formFile" type="submit" value="Send Request"></input>
    </form>
  );
}

export default Form;
