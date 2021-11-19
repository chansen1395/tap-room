import React from "react";
import '../App.css';
import KegControl from "./KegControl";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <React.Fragment>

      <div className='background'>

        <Container>

          <Row>

            <header className="App-header">
              <Header />
            </header>

          </Row>

          <Row>

            <KegControl />

          </Row>

        </Container>

        {/* This was the only immediate way I could find to stretch the 
        image below the Add Keg Button. I am not proud of this 😆 */}
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        
      </div>
    </React.Fragment>
  );
}

export default App;
