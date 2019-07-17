import React, { Component } from "react";
import '../css/searchBar.scss'

class SearchBar extends Component {
	state = { term: "" };

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
