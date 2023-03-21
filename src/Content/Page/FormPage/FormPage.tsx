import React from 'react';
import FormGeneralInfo from './FormGeneralInfo/FormGeneralInfo';
import FormProjectType from './FormProjectType/FormProjectType';
import FormLangInfo from './FormLangInfo/FormLangInfo';
import './FormPage.css';

// buy a program from freelance
class FormPage extends React.Component {
  refName: React.RefObject<HTMLInputElement>;
  refCost: React.RefObject<HTMLInputElement>;
  refMail: React.RefObject<HTMLInputElement>;
  refDate: React.RefObject<HTMLInputElement>;
  refPrType: React.RefObject<HTMLSelectElement>;
  refLang: React.RefObject<HTMLInputElement>[];
  refFile: React.RefObject<HTMLInputElement>;
  refPayment: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    console.log(
      'name' +
        this!.refName!.current!.value +
        this!.refCost!.current!.value +
        this!.refMail!.current!.value +
        this!.refDate!.current!.value +
        this!.refPrType!.current!.value +
        this!.refLang[0]!.current!.checked +
        this!.refLang[1]!.current!.checked +
        this!.refLang[2]!.current!.checked +
        this!.refLang[3]!.current!.checked +
        this!.refFile!.current!.files[0]!.name +
        this!.refPayment!.current!.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="formPage">
        <form className="form" onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default FormPage;
