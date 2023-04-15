import React, { useState, useEffect, useCallback } from 'react';
import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import ModalDialog from './ModalDialog/ModalDialog';
import axios from 'axios';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { changeList } from './cardList';

function Main() {
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const setSearchValue = useDispatch();
  const cardList = useSelector((state: RootState) => state.cardList.value);
  const setCardList = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalDialog, setModalDialog] = useState('');

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
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
      .then((data) => {
        setCardList(changeList(data.data?.docs));
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      });
  }, [searchValue, setCardList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {isModalDialog && <ModalDialog name={isModalDialog} setDialog={setModalDialog} />}
      <SearchBar value={searchValue} setSearchValue={setSearchValue} />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Request finished with error</h1>}
      {!isLoading && !isError && <CardList data={cardList} setDialog={setModalDialog} />}
    </div>
  );
}

export default Main;
