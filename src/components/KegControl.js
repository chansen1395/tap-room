import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
      placeholder: "Keg Name"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleEditChange(event) {
    this.setState({placeholder: event.target.placeholder.value});
  }
  
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }

  handleKegDetail = (id) => {
    const selectedKeg = this.state.mainKegList.filter(Keg => Keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(Keg => Keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }
  
  handleEditingKegInList = (KegToEdit) => {
    const editedMainKegList = this.state.mainKegList
    .filter(Keg => Keg.id !== this.state.selectedKeg.id)
    .concat(KegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }
  
  handleBuyKeg = () => {
  
    let buyKeg = this.state.mainKegList.filter(Keg => Keg.id === this.state.selectedKeg.id)[0];

    if (buyKeg.quantity <= 0){
      alert(buyKeg.name + " is out of stock. Please restock or choose another Keg.");
    } else {
    buyKeg = buyKeg.quantity--;

    this.setState({
      buyKeg: buyKeg
    });
    }
  }

  handleRestockKeg = () => {
  
    let restockKeg = this.state.mainKegList.filter(Keg => Keg.id === this.state.selectedKeg.id)[0];

    restockKeg = restockKeg.quantity++;

    this.setState({
      restockKeg: restockKeg
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm 
        Keg = {this.state.selectedKeg}
        onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Stop Editing";

    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
        Keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick}      
        onClickingBuy = {this.handleBuyKeg}      
        onClickingRestock = {this.handleRestockKeg} />      
        
        buttonText = "Return to Keg List";
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Return to Keg List";
    
    } else {
      currentlyVisibleState = <KegList KegList={this.state.mainKegList} onKegSelection={this.handleKegDetail}/>;
      buttonText = "Add Keg"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;