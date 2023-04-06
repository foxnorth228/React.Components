import React, { useState, useEffect, useCallback } from 'react';
import ModalDialogCard from './ModalDialogCard/ModalDialogCard';
import './ModalDialog.css';
import { cardInf } from '../CardList/dataCard';
import axios from 'axios';

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
    axios
      .get(
        'https://the-one-api.dev/v2/character?' +
          new URLSearchParams({
            name: name,
          }),
        {
          headers: {
            Authorization: 'Bearer 2YKrVJHDJfrg_jneDz-z',
          },
        }
      )
      .then((response) => {
        setCard(response.data.docs[0]);
        setIsLoading(false);
        setIsError(false);
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
