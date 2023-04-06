import React, { useState, useEffect, useCallback } from 'react';
import ModalDialogCard from './ModalDialogCard/ModalDialogCard';
import './ModalDialog.css';
import { cardInf } from '../CardList/dataCard';

function ModalDialog({
  name,
  setDialog,
}: {
  name: string;
  setDialog: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [card, setCard] = useState<cardInf | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    fetch(
      'https://the-one-api.dev/v2/character?' +
        new URLSearchParams({
          name: name,
        }),
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer 2YKrVJHDJfrg_jneDz-z',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCard(data.docs[0]);
        setIsLoading(false);
        setIsError(false);
        console.log(data);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      });
  }, [name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="modalDialog" onClick={() => setDialog('')}>
      <div className="modalDialog__block" onClick={(event) => event.stopPropagation()}>
        <div className="modalDialog__cross" onClick={() => setDialog('')}></div>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Request finished with error</h1>}
        {!isLoading && !isError && <ModalDialogCard card={card} />}
      </div>
    </div>
  );
}

export default ModalDialog;
