import React, { useEffect, useState } from 'react';
import './Card.css';
import ICard from '../ICard';

function Card({ card }: { card: ICard }) {
  const [fileData, setFileData] = useState('');
  const file = card.file;

  useEffect(() => {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      if (e.target) {
        const { result } = e.target;
        if (result) {
          setFileData(result as string);
        }
      }
    };
    reader.readAsDataURL(file);
  }, [file]);

  const { name, cost, mail, date, projectType, lang, isPrepayment } = card;
  return (
    <div className="formCard">
      <span>{'Name: ' + name}</span>
      <span>{'Cost: ' + cost}</span>
      <span>{'Mail: ' + mail}</span>
      <span>{'Date: ' + date.toISOString().slice(0, 10)}</span>
      <span>{'ProjectType: ' + projectType}</span>
      <span>{'Programming language: ' + lang}</span>
      <span>{'Prepatment: ' + isPrepayment.toString()}</span>
      <img width={'200px'} height={'200px'} src={fileData} alt="card image"></img>
    </div>
  );
}

export default Card;
