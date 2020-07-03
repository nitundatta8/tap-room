import React from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList'

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
  }
  render() {
    let currentVisibleState = null;
    let addKegButton = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm />
    }
    else {
      currentVisibleState = <KegList />
      addKegButton = <button>Add Keg</button>
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}
export default TapRoomControl;