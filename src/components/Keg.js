import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Keg(props) {
  return (
    <React.Fragment>

      <Col xs={4}>

        <div className="card custom-card">

          <h3 className="card-title" style={{ textAlign: 'center' }}>{props.name}</h3>
          <h5 className="card-body" style={{ textAlign: 'center' }}>{props.brand}</h5>

          <Button variant='primary' size='lg' onClick={() =>
            props.whenKegClicked(props.id)}>Keg Details</Button>

        </div>
      </Col>
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