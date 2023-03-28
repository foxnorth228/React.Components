import React, { BaseSyntheticEvent, useMemo, useRef } from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import { IRefCardList } from '../FormPage';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import './Form.css';
import ICard from '../CardList/ICard';

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
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  function handleSubmit1(
    data: FieldValues,
    e: BaseSyntheticEvent<object, object, HTMLFormElement> | undefined
  ) {
    console.log(data);
    console.log(errors);
    console.log(e);
    if (confirm('Are you sure (data will be saved)?')) {
      const lang = '';
      refCardList?.current?.createCard({
        name: data.name,
        cost: data.cost,
        mail: data.mail,
        date: data.date,
        projectType: data.projectType,
        lang: lang,
        file: data.sample,
        isPrepayment: data.prepayment,
      });
    }
    e?.target.reset();
  }

  function checkFileError(errors: IErrorValidiry) {
    console.log('check', errors.file);
    switch (errors.file) {
      case 1:
        return <span className="errorMessage">{'You should select file'}</span>;
      default:
        return null;
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
          {...register('sample')}
        ></input>
      </label>
      {/* {checkFileError(errorValidity)} */}
      <label className="formFile">
        Prepaymant
        <input type="checkbox" {...register('prepayment')}></input>
      </label>
      <input className="formFile" type="submit" value="Send Request"></input>
    </form>
  );
}

export default Form;
