import React from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import { IRefCardList } from '../FormPage';

interface IErrorValidiry {
  name: number;
  cost: number;
  mail: number;
  file: number;
}

class Form extends React.Component<IRefCardList, object> {
  errorValidity: IErrorValidiry;
  refForm: React.RefObject<HTMLFormElement>;
  refName: React.RefObject<HTMLInputElement>;
  refCost: React.RefObject<HTMLInputElement>;
  refMail: React.RefObject<HTMLInputElement>;
  refDate: React.RefObject<HTMLInputElement>;
  refPrType: React.RefObject<HTMLSelectElement>;
  refLang: React.RefObject<HTMLInputElement>[];
  refFile: React.RefObject<HTMLInputElement>;
  refPayment: React.RefObject<HTMLInputElement>;

  constructor(props: IRefCardList) {
    super(props);
    this.refForm = React.createRef();
    this.refName = React.createRef();
    this.refCost = React.createRef();
    this.refMail = React.createRef();
    this.refDate = React.createRef();
    this.refPrType = React.createRef();
    this.refLang = [];
    for (let i = 0; i < 4; ++i) {
      this.refLang.push(React.createRef());
    }
    this.refFile = React.createRef();
    this.refPayment = React.createRef();

    this.errorValidity = {
      name: 0,
      cost: 0,
      mail: 0,
      file: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  resetErrorValidity() {
    this.errorValidity = {
      name: 0,
      cost: 0,
      mail: 0,
      file: 0,
    };
  }

  validate() {
    if (
      this!.refName!.current!.value === '' ||
      (this!.refCost!.current!.value === '' && !Number(this!.refCost!.current!.value)) ||
      (this!.refMail!.current!.value === '' && !this!.refMail!.current?.checkValidity()) ||
      (this!.refFile!.current!.files && typeof this!.refFile!.current!.files[0] === 'undefined')
    ) {
      return false;
    }
    return true;
  }

  handleSubmit(event: React.FormEvent) {
    if (this.validate() && confirm('Are you sure (data will be saved)?')) {
      let lang = '';
      for (const ref of this.refLang) {
        if (ref.current && ref.current.checked) {
          lang = ref.current.value;
        }
      }
      this?.props.refCardList?.current?.createCard({
        name: this!.refName!.current!.value,
        cost: Number.parseInt(this!.refCost!.current!.value),
        mail: this!.refMail!.current!.value,
        date: new Date(this!.refDate!.current!.value),
        projectType: this!.refPrType!.current!.value,
        lang: lang,
        file: this!.refFile!.current!.files![0],
        isPrepayment: this!.refPayment!.current!.checked,
      });
      this && this.refForm && this.refForm.current && this.refForm.current.reset();
    }
    event.preventDefault();
  }

  render() {
    return (
      <form ref={this.refForm} className="form" onSubmit={this.handleSubmit}>
        <FormGeneralInfo
          refName={this.refName}
          refCost={this.refCost}
          refMail={this.refMail}
          refDate={this.refDate}
        />
        <FormProjectType refPr={this.refPrType} />
        <FormLangInfo refLang={this.refLang} />
        <label className="formVert formFile">
          Choose sample image
          <input
            ref={this.refFile}
            className="formFileI"
            type="file"
            accept="image/png, image/jpeg"
          ></input>
        </label>
        <label className="formFile">
          Prepaymant
          <input ref={this.refPayment} type="checkbox"></input>
        </label>
        <input className="formFile" type="submit" value="Send Request"></input>
      </form>
    );
  }
}

export default Form;
