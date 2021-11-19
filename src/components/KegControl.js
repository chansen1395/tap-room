import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: 'Tractor Pull',
          brand: 'Wolves and People',
          price: 6,
          abv: 6.4,
          quantity: 17,
          id: 'tractorpull'
        },
        {
          name: 'Hefeweizen',
          brand: 'Widmer Brothers',
          price: 5.5,
          abv: 5.1,
          quantity: 24,
          id: 'hefe'
        },
        {
          name: 'Pub Lager',
          brand: '10 Barrels',
          price: 4,
          abv: 5.0,
          quantity: 6,
          id: 'publager'
        },
        {
          name: 'Honeycone',
          brand: 'Wolves & People',
          price: 5.75,
          abv: 5.8,
          quantity: 0,
          id: 'honeycone'
        },
        {
          name: 'Schraderbräu',
          brand: 'Hank Schrader',
          price: 5,
          abv: 6.2,
          quantity: 12,
          id: 'schraderbrau'
        }
      ],
      selectedKeg: null,
      editing: false,
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
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }
  
  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }
  
  handleBuyKeg = () => {
  
    let buyKeg = this.state.mainKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

    if (buyKeg.quantity <= 0){
      alert(buyKeg.name + " is out of stock. Please restock or choose another keg.");
    } else {
    buyKeg = buyKeg.quantity--;

    this.setState({
      buyKeg: buyKeg
    });
    }
  }

  handleRestockKeg = () => {
  
    let restockKeg = this.state.mainKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

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
        keg = {this.state.selectedKeg}
        onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Stop Editing";

    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
        keg = {this.state.selectedKeg} 
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
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleKegDetail}/>;
      buttonText = "Add Keg"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant='success' size='lg' onClick={this.handleClick}>{buttonText}</Button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default KegControl;