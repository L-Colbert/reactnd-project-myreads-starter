import React, { Component } from 'react'


class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <h2 className="bookshelf-title">Want to Read</h2>
                <h2 className="bookshelf-title">Read</h2>
            </div>
        )
    }

}

export default BookShelf