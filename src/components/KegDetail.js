import React from "react";
import PropTypes from "prop-types";


function kegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingBuy, onClickingRestock } = props;

  // declare the kegHeader to make the computer happy
  var kegHeader = "";

  if (keg.quantity > 10){
    kegHeader = <h3>{keg.name} - {keg.quantity} currently in stock</h3>;
  }
  
  else if (keg.quantity > 0) {
    kegHeader = <h3>{keg.name} - {keg.quantity} low stock! </h3>;
  } else {
    kegHeader = <h3>{keg.name} - is not in stock <span role="img">☹️</span></h3>;
  };

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      {kegHeader}
      {/* <h3>{keg.name} - {keg.quantity} currently in stock</h3> */}
      <p><em>{keg.description}</em></p>
      <button onClick={ onClickingEdit }>Update keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete keg</button>
      <button onClick={ onClickingBuy }>Buy 1 serving</button>
      <button onClick={ onClickingRestock }>Restock 1 serving</button>
      <hr/>
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