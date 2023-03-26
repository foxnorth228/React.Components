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
    reader.readAsDataURL(this.file);
  }

  render() {
    const { name, cost, mail, date, projectType, lang, file, isPrepayment } = this.props.card;
    console.log('render' + name);
    return (
      <div>
        <span>{name}</span>
        <span>{cost}</span>
        <span>{mail}</span>
        <span>{date.toISOString()}</span>
        <span>{projectType}</span>
        <span>{lang}</span>
        <img width={'200px'} height={'200px'} src={this.state.fileData} alt="card image"></img>
        <span>{isPrepayment}</span>
      </div>
    );
  }
}

export default Card;
