import React , { Component, Fragment } from 'react';
import Images from './Images';
import Pagination from './Pagination';

class Resultat extends Component {

    afficherImages = () => {
        const images = this.props.images;

        if(images.length === 0) return null;

        console.log(images);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {
                        images.map(image =>( 
                            <Images 
                                key = {image.id}
                                image = {image}
                        />
                        ))
                    }
                        
                </div>
                <Pagination 
                pagePrecedente = {this.props.pagePrecedente}
                pageSuivante = {this.props.pageSuivante}
                />
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                {this.afficherImages()}
            </React.Fragment>
        )
    }
}

export default Resultat;