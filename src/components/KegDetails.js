import React from 'react';
import PropTypes from 'prop-types'
import KegList from './KegList'

function KegDetails(props) {
  console.log(props.keg.name + " keg name")
  return (
    <React.Fragment>
      <hr />
      <h3>{props.keg.name} Details</h3>
      <p>Brand : {props.keg.brand}</p>
      <p>Price : ${props.keg.price} per pint</p>
      <p>Flavor : {props.keg.flavor}</p>
      <p>Caffeine Content: {props.keg.caffeine} mg</p>
      <p>Quantity : {props.keg.quantity}</p>

    </React.Fragment>
  );
}

KegDetails.prototype = {
  keg: PropTypes.object
}
export default KegDetails;

