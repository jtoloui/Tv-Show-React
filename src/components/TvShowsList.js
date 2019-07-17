import React from 'react';
import '../css/list.scss'
const TvShows = ({ data, onClick }) => {
    
    const renderList = data.map((show) => {
        return (
            <li className="list tv-shows shows" key={show.show.name}>
                <a href={show.show.url}>
                    {show.show.name}
                </a>
                <button onClick={onClick}>Add To Fav</button>
            </li>
        )
    });
    return (
        <div className="ui relaxed divided list">
            <ul className="tvshows">
                {renderList}
            </ul>
        </div>
    );
};
export default TvShows;
