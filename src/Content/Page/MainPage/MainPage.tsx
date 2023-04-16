import React, { useState, useEffect, useCallback } from 'react';
import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import ModalDialog from './ModalDialog/ModalDialog';
import axios from 'axios';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { changeList } from './cardList';
import { changeModalDialog } from './modalDialog';
import { useGetNamesQuery } from './oneApi';

function Main() {
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const setSearchValue = useDispatch();
  const cardList = useSelector((state: RootState) => state.cardList.value);
  const setCardList = useDispatch();
  const { data, error, isFetching: loading } = useGetNamesQuery(searchValue);
  const modalDialog = useSelector((state: RootState) => state.modalDialog.value);
  const setModalDialog = useDispatch();
  console.log(data, loading, error);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [isModalDialog, setModalDialog] = useState('');

  // const fetchData = useCallback(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       'https://the-one-api.dev/v2/character?' +
  //         new URLSearchParams({
  //           name: `/${searchValue}/i`,
  //         }),
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: 'Bearer 2YKrVJHDJfrg_jneDz-z',
  //         },
  //       }
  //     )
  //     .then((data) => {
  //       setCardList(changeList(data.data?.docs));
  //       setIsLoading(false);
  //       setIsError(false);
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  // }, [searchValue, setCardList]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <div>
      {modalDialog && (
        <ModalDialog
          name={modalDialog}
          setDialog={(name) => setModalDialog(changeModalDialog(name))}
        />
      )}
      <SearchBar value={searchValue} setSearchValue={setSearchValue} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Request finished with error</h1>}
      {!loading && !error && (
        <CardList data={data!.docs} setDialog={(name) => setModalDialog(changeModalDialog(name))} />
      )}
    </div>
  );
}

export default Main;
