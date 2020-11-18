import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // constructor(props) { // viene chiamata prima di ogni cosa, appena si crea l'istanza, ci permette di inizializzare il compone
  //  super(props);
  //  this.state = {
  //    lat: null, errorMessage: '' // assegnamo null perchè ci aspettiamo un numero
  //  };

  // }
   
  state = { lat: null, errorMessage: '' }; // assegnamo null perchè ci aspettiamo un numero, equivale alla func constructor
    
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition( // inseriamo la geoloc dentro il constructor perchè viene chiamato una volta alla creazione della pagine e non molteplici volte come il method render
      (position) => this.setState({ lat: position.coords.latitude }), // primo arg, per controlalre che la chiamata abbia successo
      (err) => this.setState({ errorMessage: err.message }) // condizione di errore
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>
    }
    
    if (!this.state.errorMessage && this.state.lat ) {
    return <SeasonDisplay lat={this.state.lat} /> // passiamo un props
    }

    return <Spinner message='Please accept location request'/>;
    // return <div>Loading!</div>
  }

  render() { // viene chiamato molteplici volte
    return ( // estraggo la logica in una func esterna e la stampo dentro al JSX return di render, per non avere instruzioni dentro al render
      <div className='border red'> 
        {this.renderContent()} 
      </div>
    );
  }
}

ReactDOM.render(
    <App />, // primo arg
    document.querySelector('#root') // sec arg
)