import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onClick(evt) {
        evt.preventDefault();
    }

    onChange(evt) {
        this.setState({
            input: evt.target.value
        });
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="search" onChange={this.onChange} />
                    <button id="searchBtn" onClick={this.onClick} >Submit</button>
                </form>
            </div>
        )
    }
}
