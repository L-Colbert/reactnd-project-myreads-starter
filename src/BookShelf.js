import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                    <Books />
                <h2 className="bookshelf-title">Want to Read</h2>
                    <Books />
                <h2 className="bookshelf-title">Read</h2>
                    <Books />
            </div>
        )
    }

}

export default BookShelf