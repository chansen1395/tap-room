import React from "react";
import PropTypes from "prop-types";
import KegControl from "./KegControl";




function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price per serving' />
        <input
          type='number'
          name='abv'
          placeholder='ABV %' />
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity of servings' />

        <button type='submit'>Add Keg!</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;