import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  let text = "";
  let changeColorText = {};
  if (props.quantity <= 0) {
    text = props.name + ' keg has run dry. Time to restock!'

  } else if (props.quantity <= 5) {
    text = "Tap is drying up " + ' Quantity ' + props.quantity + 'pints';
  } else {
    text = 'Quantity in keg : ' + props.quantity + 'pints'
    changeColorText = stock
  }


  return (
    <React.Fragment>
      <p onClick={() => props.whenKegClick(props.id)}>On Tap {props.name} (Click to see details)</p>
      <p style={changeColorText}>{text}</p>
      <button onClick={() => props.whenSellingClick(props.id)}>Sell Pint</button>
    </React.Fragment>

  );
}
Keg.prototype = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  whenKegClick: PropTypes.func,
  whenSellingClick: PropTypes.func,

  keg: PropTypes.obje
};

const stock = {
  textStyle: '25px'
}

const lowStock = {
  color: "yellow",
  textStyle: '25px'
}
const dryUp = {
  color: "Red",
  textStyle: '25px'
}
export default Keg;