import React from 'react';
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row
} from 'reactstrap';

const HomePage = () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center my-5">
        <Container fluid>
          <Row>
            <Col sm={{ size: 10, offset: 1 }}>
              <h1 className="display-4">Hello Next.js</h1>
              <p className="lead my-3">
                Next.js 9 + Reactstrap + Sass
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Getting Started</h2>
            <hr />
            <p>
              Install dependencies:&nbsp;
              <code>npm install</code>
            </p>
            <p>
              Run development server:&nbsp;
              <code>npm run dev</code>
            </p>
            <p>
              Build and export:&nbsp;
              <code>npm run export</code>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
