import React, { Component } from 'react';

const Images = props => {

        const {largeImageURL, likes, previewURL, tags, views} = props.image;
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className ="card">
                    <img src={previewURL} alt = {tags} className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text">{likes} aiment</p>
                        <p className="card-text">{views} vues</p>

                        <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Voir l'image</a>
                    </div>
                </div>
            </div>
        )
    }


export default Images;