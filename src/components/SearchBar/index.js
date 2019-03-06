import React, { Component } from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" name={props.name} onChange={props.onChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
