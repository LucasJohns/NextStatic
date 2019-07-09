/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';

// global styles
import '../styles/base.scss';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
