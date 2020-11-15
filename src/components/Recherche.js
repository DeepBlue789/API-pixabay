import React , { Component } from 'react';

class Recherche extends Component {

    rechercheRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
// Récupération de la valeur de l'input
        const data =  this.rechercheRef.current.value;
// Envoie de cette valeur au composant principal        
        this.props.donneesRecherchees(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text"
                        ref = {this.rechercheRef}
                        className="form-control form-control-lg"
                        placeholder="Recherche..."
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit"
                        className = "btn btn-danger btn-block btn-lg"
                        value="Recherche"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Recherche ;