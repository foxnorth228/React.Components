import React from 'react';
import Form from './Form/Form';
import CardList from './CardList/CardList';
import './FormPage.css';

export interface IRefCardList {
  refCardList: React.RefObject<CardList>;
}

// buy a program from freelance
class FormPage extends React.Component {
  refCardList: React.RefObject<CardList>;

  constructor(props: object) {
    super(props);
    this.refCardList = React.createRef();
  }

  render() {
    return (
      <div className="formPage">
        <Form refCardList={this.refCardList} />
        <CardList ref={this.refCardList} />
      </div>
    );
  }
}

export default FormPage;
