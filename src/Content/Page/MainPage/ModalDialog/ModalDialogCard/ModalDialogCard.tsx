import React from 'react';
import './ModalDialogCard.css';
import { cardInf } from '../../CardList/dataCard';

const stringOrNoInf = (str: string) => {
  if (str !== '' && str !== 'NaN') {
    return str;
  } else {
    return 'No information';
  }
};

function ModalDialogCard({ card }: { card: cardInf | null }) {
  if (card === null) {
    return <div>Error</div>;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, wikiUrl, ...restCard } = card;
  const info = Object.entries(restCard).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  return (
    <div className="modalDialog__infoBlock">
      {info.map((el, i) => {
        return (
          <div key={i}>
            <span>{`${el[0]}: `}</span>
            <span>{stringOrNoInf(el[1])}</span>
          </div>
        );
      })}
      <div>
        <span>wikiUrl: </span>
        <a href={wikiUrl}>character link</a>
      </div>
    </div>
  );
}

export default ModalDialogCard;
