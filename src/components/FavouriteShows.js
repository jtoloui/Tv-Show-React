import React from 'react';

const FavShowList = ({ data }) => {
    
    const renderList = data.forEach((show) => {
        return show
    });
    return (
        <div className="ui relaxed divided list">
            <ul className="favourites">
                {renderList}
            </ul>
        </div>
    );
};
export default FavShowList;
