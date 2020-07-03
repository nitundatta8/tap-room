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
          whenKegClick={() => props.onKegSelection(keg.id)}
          id={keg.id}
          key={keg.id} />
      )}

    </React.Fragment>
  );
}

KegList.prototype = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}
export default KegList;