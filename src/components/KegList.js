import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          caffeine={keg.caffeine}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id} />
      )}

    </React.Fragment>
  );
}

KegList.prototype = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  caffeine: PropTypes.number,
  quantity: PropTypes.number
}
export default KegList;