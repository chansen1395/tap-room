import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {

  return (
    <React.Fragment>
      <div className="card custom-card">

      <form onSubmit={props.formSubmissionHandler}>
        
      <div className="card-title"><h2>Add/Update Keg</h2>
      </div>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
          <br></br><br></br>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
          <br></br><br></br>
        <input
          type='number'
          name='price'
          min='0'
          placeholder='Price per serving' />
          <br></br><br></br>
        <input
          type='number'
          name='abv'
          min='0'
          max='100'
          step='.1'
          placeholder='ABV %' />
          <br></br><br></br>
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity of servings' />

          <br></br><br></br>
        <Button variant='warning' size='lg' type='submit'>Add Keg!</Button>
      </form>
        </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;