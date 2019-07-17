import React, { Component } from 'react';
import TvShowList from './TvShowsList';
import SearchBar from './SearchBar';
import FavShowList from './FavouriteShows'
import tvshows from "../API/showSearch";

import '../css/main.scss'


class App extends Component {
    state = {
        shows: [],
        showNames: [],
        favShows: [],
        accendingClicked: false,
        onDecendingClicked: true,
    };

    onTermSubmit = async (term) => {
        let show = [];
        let showNames = [];
        const reponse = await tvshows.get("/shows", {
            params: {
                q: term,
            },
        })
        reponse.data.map((shows) => {
            return show.push(shows);
        });
        show.forEach(names => showNames.push(names.show.name));
        const { favShows } = this.state;
        let tempArr = [...favShows];
        tempArr = [];
        
        this.setState({
            shows: show,
            showNames,
            favShows : tempArr,
        });
    };
    onClick = (e) => {
        const target = e.target;
        const parent = target.parentElement;
        const fav = document.querySelector('ul.favourites');
        const list = document.querySelector('.tvshows');
        const { favShows } = this.state;
        let tempArr = [...favShows];

        if (!parent.classList.contains("Fav")) {
            parent.classList.remove("list", "shows");
            parent.classList.add("fav-list", "Fav", "removeBtn");
            target.innerText = "Remove";
            fav.append(parent);
            tempArr.push(parent);
            this.setState({
                favShows: tempArr
            });
        } else {
            parent.classList.remove("fav-list", "Fav", "removeBtn");
            parent.classList.add("list", "shows");
            target.innerText = "Add To Fav";
            list.append(parent);
        }
        if (this.onTermSubmit) {
        }
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="tv-shows">
                        <h3>My Favourite TV Shows</h3>
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                        <TvShowList data={this.state.shows} onClick={this.onClick} />
                    </div>
                    <div className="favourites">
                        <h3>favourites</h3>
                        <FavShowList data={this.state.favShows} />
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
