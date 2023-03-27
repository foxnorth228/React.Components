import React from 'react';
import './Card.css';
import ICard from '../ICard';

class Card extends React.Component<{ card: ICard }, { fileData: string }> {
  file: File;

  constructor(props: { card: ICard }) {
    super(props);
    this.file = this.props.card.file;
    this.state = { fileData: '' };
  }

  componentDidMount(): void {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      if (e.target) {
        const { result } = e.target;
        if (result) {
          this.setState({ fileData: result as string });
        }
      }
    };
    console.log(this.file);
    reader.readAsDataURL(this.file);
  }

  render() {
    const { name, cost, mail, date, projectType, lang, isPrepayment } = this.props.card;
    console.log('render' + name);
    return (
      <div className="formCard">
        <span>{'Name: ' + name}</span>
        <span>{'Cost: ' + cost}</span>
        <span>{'Mail: ' + mail}</span>
        <span>{'Date: ' + date.toISOString().slice(0, 10)}</span>
        <span>{'ProjectType: ' + projectType}</span>
        <span>{'Programming language: ' + lang}</span>
        <span>{'Prepatment: ' + isPrepayment.toString()}</span>
        <img width={'200px'} height={'200px'} src={this.state.fileData} alt="card image"></img>
      </div>
    );
  }
}

export default Card;
