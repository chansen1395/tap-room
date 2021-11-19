import React from "react";
import '../App.css';
import KegControl from "./KegControl";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <React.Fragment>
      <body style={{backgroundColor:'gray'}}>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <KegControl />
        </Row>
      </Container>
      </body>
    </React.Fragment>
  );
}

export default App;
