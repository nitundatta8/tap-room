import React from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList'

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectKeg: null
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg)
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.state.masterKegList.filter((keg => keg.id === id)[0])
    this.setState({
      selectKeg: currentKeg
    })
  }

  render() {
    let currentVisibleState = null;
    let addKegButton = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onAddKegCreation={this.handleAddingNewKegToList} />
    }
    else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
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