import React from 'react';
import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import ModalDialog from './ModalDialog/ModalDialog';
import { useModalDialog } from './modalDialog';
import { useGetNamesQuery } from './oneApi';
import { useSearchValue } from './searchValue';

function Main() {
  const [searchValue, setSearchValue] = useSearchValue();
  const [modalDialog, setModalDialog] = useModalDialog();
  const { data, error, isFetching: loading } = useGetNamesQuery(searchValue);
  return (
    <div>
      {modalDialog && <ModalDialog name={modalDialog} setDialog={setModalDialog} />}
      <SearchBar value={searchValue} setSearchValue={setSearchValue} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Request finished with error</h1>}
      {!loading && !error && <CardList data={data!.docs} setDialog={setModalDialog} />}
    </div>
  );
}

export default Main;
