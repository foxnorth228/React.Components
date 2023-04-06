import React, { useState, useEffect } from 'react';
import './ModalDialog.css';

function ModalDialog({ setDialog }: { setDialog: React.Dispatch<React.SetStateAction<string>> }) {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <div className="modalDialog" onClick={() => setDialog('')}>
      <div className="modalDialog__block" onClick={(event) => event.stopPropagation()}>
        <div className="modalDialog__cross" onClick={() => setDialog('')}></div>
      </div>
    </div>
  );
}

export default ModalDialog;
