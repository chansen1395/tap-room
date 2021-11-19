import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Keg(props) {
  return (
    <React.Fragment>

      {/* <Col xs={6}> */}
      <div className="card"
      style={{
        width: '18rem',
        margin: '15px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .9
        }}>
      <h3 className="card-body" style={{textAlign: 'center'}}>{props.name} - {props.brand}</h3>
      <Button variant='primary' size='lg' onClick = {() => props.whenKegClicked(props.id)}>Keg Details</Button>
      </div>
      {/* </Col> */}
      {/* <hr/> */}
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;