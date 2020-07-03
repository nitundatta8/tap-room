import React from 'react';

function KegDetails(props) {
  return (
    <React.Fragment>
      <hr />
      <h3>{props.name} Details</h3>
      <p>Brand : {props.brand}</p>
      <p>Price : {props.price}</p>
      <p>Flavor : {props.flavor}</p>
      <p>Caffeine : {props.caffeine}</p>
      <p>Quantity : {props.quantity}</p>
    </React.Fragment>
  );
}

KegDetails.prototype = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  caffeine: PropTypes.number,
  quantity: PropTypes.number
}
export default KegDetails;


export default KegDetails;