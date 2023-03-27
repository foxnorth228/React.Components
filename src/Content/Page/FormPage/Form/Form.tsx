import React, { useMemo, useRef } from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import { IRefCardList } from '../FormPage';
import './Form.css';

export interface IErrorValidiry {
  name: number;
  cost: number;
  mail: number;
  file: number;
}

function Form({ refCardList }: { refCardList: IRefCardList }) {
  const [, updateState] = React.useState({});
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const errorValidity: IErrorValidiry = useMemo(
    () => ({
      name: 0,
      cost: 0,
      mail: 0,
      file: 0,
    }),
    []
  );
  const refForm = useRef<HTMLFormElement>(null);
  const refName = useRef<HTMLInputElement>(null);
  const refCost = useRef<HTMLInputElement>(null);
  const refMail = useRef<HTMLInputElement>(null);
  const refDate = useRef<HTMLInputElement>(null);
  const refPrType = useRef<HTMLSelectElement>(null);
  const refLang = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const refFile = useRef<HTMLInputElement>(null);
  const refPayment = useRef<HTMLInputElement>(null);
  function validate() {
    if (refName!.current!.value === '') {
      errorValidity.name = 1;
    } else {
      errorValidity.name = 0;
    }

    if (refCost!.current!.value === '') {
      errorValidity.cost = 1;
    } else if (!Number(refCost!.current!.value)) {
      errorValidity.cost = 2;
    } else {
      errorValidity.cost = 0;
    }

    if (refMail!.current!.value === '') {
      errorValidity.mail = 1;
    } else if (!refMail!.current?.checkValidity()) {
      errorValidity.mail = 2;
    } else {
      errorValidity.mail = 0;
    }
    if (refFile!.current!.files && typeof refFile!.current!.files[0] === 'undefined') {
      errorValidity.file = 1;
    } else {
      errorValidity.file = 0;
    }

    forceUpdate();
    return (Object.values(errorValidity) as number[]).every((el) => el === 0);
  }

  function handleSubmit(event: React.FormEvent) {
    if (validate() && confirm('Are you sure (data will be saved)?')) {
      let lang = '';
      for (const ref of refLang) {
        if (ref.current && ref.current.checked) {
          lang = ref.current.value;
        }
      }
      refCardList?.current?.createCard({
        name: refName!.current!.value,
        cost: Number.parseInt(refCost!.current!.value),
        mail: refMail!.current!.value,
        date: new Date(refDate!.current!.value),
        projectType: refPrType!.current!.value,
        lang: lang,
        file: refFile!.current!.files![0],
        isPrepayment: refPayment!.current!.checked,
      });
      refForm && refForm.current && refForm.current.reset();
    }
    event.preventDefault();
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
    <form ref={refForm} className="form" onSubmit={handleSubmit}>
      <FormGeneralInfo
        errors={errorValidity}
        refName={refName}
        refCost={refCost}
        refMail={refMail}
        refDate={refDate}
      />
      <FormProjectType refPr={refPrType} />
      <FormLangInfo refLang={refLang} />
      <label className="formVert formFile">
        Choose sample image
        <input
          ref={refFile}
          className="formFileI"
          type="file"
          accept="image/png, image/jpeg"
        ></input>
      </label>
      {checkFileError(errorValidity)}
      <label className="formFile">
        Prepaymant
        <input ref={refPayment} type="checkbox"></input>
      </label>
      <input className="formFile" type="submit" value="Send Request"></input>
    </form>
  );
}

export default Form;
