import React from 'react';

class Page extends React.Component<{ type: string }, object> {
  constructor(props: { type: string }) {
    super(props);
    this.getMainElement = this.getMainElement.bind(this);
  }

  getMainElement(): JSX.Element {
    let returnedElement: JSX.Element = <></>;
    switch (this.props.type) {
      case 'main':
        returnedElement = <div>Main</div>;
        break;
      case 'about':
        break;
      case 'error':
        break;
      default:
        break;
    }
    return returnedElement;
  }

  render() {
    return this.getMainElement();
  }
}

export default Page;
