import React from 'react';
import './FormPage.css';

// buy a program from freelance
class FormPage extends React.Component {
  render() {
    const a = new Date().toISOString().slice(0, 10);
    return (
      <div className="formPage">
        <div className="form">
          <input type="text" name="name" placeholder="Name of project..."></input>
          <input type="number" name="cost" placeholder="How much money you offer..."></input>
          <input type="email" name="contact" placeholder="Your contact email..."></input>
          <input type="date" value={a} min={a}></input>
          <select>
            <option>FrontEnd</option>
            <option>BackEnd</option>
            <option>Desktop</option>
            <option>Mobile</option>
          </select>
          <label>
            Prepaymant
            <input type="checkbox"></input>
          </label>
          <fieldset>
            <label>
              Javascript
              <input type="radio"></input>
            </label>
            <label>
              Typescript
              <input type="radio"></input>
            </label>
          </fieldset>
          <input type="file" accept="image/png, image/jpeg"></input>
          <input type="submit" value="Send Request"></input>
        </div>
      </div>
    );
  }
}

export default FormPage;
