import React from 'react';
import ModalDialogCard from './ModalDialogCard/ModalDialogCard';
import './ModalDialog.css';
import { useGetNamesQuery } from '../oneApi';

function ModalDialog({ name, setDialog }: { name: string; setDialog: (name: string) => void }) {
  const { data, error, isFetching: loading } = useGetNamesQuery(name);
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
