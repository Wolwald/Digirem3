import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
//import { IconGrid } from './Layouts/Landingpage';
//import { Dashboard } from './Layouts/Dashboard';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}
