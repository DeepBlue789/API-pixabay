import React from 'react';

const Pagination = props => {
    return (
        <div className="py-3">
            <button type="button" onClick={props.pagePrecedente} className="btn btn-info mr-1">Précédent &larr;</button>
            <button type="button" onClick={props.pageSuivante} className="btn btn-info">Suivant &rarr;</button>
        </div>
    )
}

export default Pagination;