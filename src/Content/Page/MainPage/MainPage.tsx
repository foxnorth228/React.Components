import React, { useState, useEffect, useCallback } from 'react';
import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import ModalDialog from './ModalDialog/ModalDialog';

function Main() {
  const [searchValue, setSearchValue] = useState('');
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalDialog, setModalDialog] = useState('');

  const fetchData = useCallback(() => {
    setIsLoading(true);
    fetch(
      'https://the-one-api.dev/v2/character?' +
        new URLSearchParams({
          name: `/${searchValue}/i`,
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
        setCardList(data?.docs);
        setIsLoading(false);
        setIsError(false);
        console.log(data);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      });
  }, [searchValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {isModalDialog && <ModalDialog />}
      <SearchBar setSearchValue={setSearchValue} />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Request finished with error</h1>}
      {!isLoading && !isError && <CardList data={cardList} setDialog={setModalDialog} />}
    </div>
  );
}

export default Main;
