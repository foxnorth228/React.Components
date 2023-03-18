import React from 'react';
import MainPage from './MainPage/MainPage';
import AboutPage from './AboutPage/AboutPage';
import ErrorPage from './ErrorPage/ErrorPage';
import './Page.css';

class Page extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
    this.getMainElement = this.getMainElement.bind(this);
  }

  getMainElement(): JSX.Element {
    let returnedElement: JSX.Element = <></>;
    switch (this.props.type) {
      case 'main':
        returnedElement = <MainPage />;
        break;
      case 'about':
        returnedElement = <AboutPage />;
        break;
      case 'error':
        returnedElement = <ErrorPage />;
        break;
      default:
        break;
    }
    return returnedElement;
  }

  render() {
    return <div className="page">{this.getMainElement()}</div>;
  }
}

export default Page;
