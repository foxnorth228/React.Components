import React, { useState, useEffect, useCallback } from 'react';
import ModalDialogCard from './ModalDialogCard/ModalDialogCard';
import './ModalDialog.css';
import { cardInf } from '../CardList/dataCard';
import axios from 'axios';
import { useGetNamesQuery } from '../oneApi';

function ModalDialog({
  name,
  setDialog,
}: {
  name: string;
  setDialog: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { data, error, isFetching: loading } = useGetNamesQuery(name);
  // const [card, setCard] = useState<cardInf | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // const fetchData = useCallback(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       'https://the-one-api.dev/v2/character?' +
  //         new URLSearchParams({
  //           name: name,
  //         }),
  //       {
  //         headers: {
  //           Authorization: 'Bearer 2YKrVJHDJfrg_jneDz-z',
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setCard(response.data.docs[0]);
  //       setIsLoading(false);
  //       setIsError(false);
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  // }, [name]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <div className="modalDialog" onClick={() => setDialog('')}>
      <div className="modalDialog__block" onClick={(event) => event.stopPropagation()}>
        <div className="modalDialog__cross" onClick={() => setDialog('')}></div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Request finished with error</h1>}
        {!loading && !error && <ModalDialogCard card={data!.docs![0]} />}
      </div>
    </div>
  );
}

export default ModalDialog;
