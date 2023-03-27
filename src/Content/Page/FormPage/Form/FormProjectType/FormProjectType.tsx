import React from 'react';
import './FormProjectType.css';

function FormProjectType({ refPr }: { refPr: React.RefObject<HTMLSelectElement> }) {
  return (
    <>
      <label className="formProjectType">
        Choose project type...
        <select defaultValue={'FrontEnd'} required ref={refPr}>
          <option>FrontEnd</option>
          <option>BackEnd</option>
          <option>Desktop</option>
          <option>Mobile</option>
        </select>
      </label>
    </>
  );
}

export default FormProjectType;
