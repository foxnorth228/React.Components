import React from 'react';
import './Page.css';
import pagesInfo from '../../pagesInfo';

class Page extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
    this.getMainElement = this.getMainElement.bind(this);
  }

  getMainElement(): JSX.Element {
    const page = Object.entries(pagesInfo).find((el) => el[1].type === this.props.type);
    return (page && page[1] && page[1].page) || <></>;
  }

  render() {
    return <div className="page">{this.getMainElement()}</div>;
  }
}

export default Page;
