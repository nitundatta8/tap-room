import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return (
    <React.Fragment>
      <p>On Tap {props.name} (Click to see details)</p>
    </React.Fragment>

  );
}
Keg.prototype = {
  name: PropTypes.string
};
export default Keg;