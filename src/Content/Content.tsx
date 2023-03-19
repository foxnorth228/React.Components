import React from 'react';
import './Content.css';
import Header from './Header/Header';
import Page from './Page/Page';

class Content extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
  }

  render() {
    return (
      <>
        <Header type={this.props.type} />
        <Page type={this.props.type} />
      </>
    );
  }
}

export default Content;
