import Recherche from './components/Recherche';
import './App.css';
import { Component } from 'react';
import Resultat from './components/Resultat';

class App extends Component {

  state = {
    donnees : "",
    images : [],
    pages : 1
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'end');
  }

  pagePrecedente = () => {
    //Lire le statut de la page actuel
    let pages = this.state.pages;
    //incrémentation de la page actuelle
    pages -= 1;
    //Mettre à jour le state
    this.setState({
      pages
    }, () => {
      this.appelAPI();
      this.scroll();
    });
    console.log(pages)
  }
  pageSuivante = () => {
    //Lire le statut de la page actuel
    let pages = this.state.pages;
    //incrémentation de la page actuelle
    pages += 1;
    //Mettre à jour le state
    this.setState({
      pages
    }, () => {
      this.appelAPI();
      this.scroll();
    });
    console.log(pages)
  }

  appelAPI = () => {
    const donnees = this.state.donnees;
    const pages = this.state.pages;
    const URL = `https://pixabay.com/api/?key=19087606-d48fc209a5e9f52cf9355859a&q=${donnees}&per_page=30&page=${pages}`;
    console.log(URL)

    fetch(URL)
      .then(response => response.json())
      .then(results => this.setState({ images : results.hits}))
  }

  donneesRecherchees = donnees => {
    this.setState({
      donnees : donnees,
      pages : 1
    }, () => {
      this.appelAPI()
    }
    )}

  render(){ 
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Recherche d'images</p>
        <Recherche 
        donneesRecherchees = {this.donneesRecherchees}
        />
      </div>
      <div className="row justify-content-center">
        <Resultat
          images = {this.state.images}
          pagePrecedente = {this.pagePrecedente}
          pageSuivante = {this.pageSuivante}
        />
      </div>
    </div>
  );
}
}

export default App;
