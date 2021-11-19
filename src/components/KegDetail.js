import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function kegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingBuy, onClickingRestock } = props;

  // declare the kegHeader to make the computer happy
  var kegHeader = "";

  if (keg.quantity > 10) {
    kegHeader = <h3>{keg.name} - <span style={{ color: '#339130' }}>{keg.quantity} currently in stock</span></h3>;
  }

  else if (keg.quantity > 0) {
    kegHeader = <h3>{keg.name} - <span style={{ color: 'orange' }}>{keg.quantity} low stock!</span></h3>;
  } else {
    kegHeader = <h3>{keg.name} - <span style={{ color: 'red' }}>currently out of stock</span> <span role="img">☹️</span></h3>;
  };

  return (
    <React.Fragment>
      <div className="card"
        style={{
          width: '18rem',
          margin: '15px',
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: .9
        }}>
        <div className="card-title">
          <h1>Keg Detail</h1>
          <hr></hr>
        </div>
        {kegHeader}
        <ul>
          <strong>
            <li>Brewer: {keg.brand}</li>
            <li>Price: ${keg.price}</li>
            <li>ABV: {keg.abv}%</li>
          </strong>
        </ul>
      </div>

      <div className="card"
        style={{
          width: '18rem',
          margin: '15px',
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: .9
        }}>
        <p><em>{keg.description}</em></p>
        <Button variant='success' size='lg' onClick={onClickingBuy}>Buy 1 serving</Button>
        <br></br>
        <Button variant='warning' size='lg' onClick={onClickingRestock}>Restock 1 serving</Button>
        <br></br>
        <Button variant='info' size='lg' onClick={onClickingEdit}>Update keg</Button>
        <br></br>
        <Button variant='danger' size='lg' onClick={() => onClickingDelete(keg.id)}>Delete keg</Button>
        <br></br>
      </div>
    </React.Fragment>
  );
}

kegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default kegDetail;