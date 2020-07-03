import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return (
    <React.Fragment>
      <p onClick={() => props.whenKegClick(props.id)}>On Tap {props.name} (Click to see details)</p>
      <p>Quantity in keg : {props.quantity}</p>
      <button>Sell Pint</button>
    </React.Fragment>

  );
}
Keg.prototype = {
  name: PropTypes.string
};
export default Keg;