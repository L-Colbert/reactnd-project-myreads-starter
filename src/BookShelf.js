import React, { Component } from 'react'
import Books from './Books'
import PropTypes from 'prop-types'


class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {

        const { books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Books
                    onChangeShelf={this.props.onChangeShelf}
                    showingBooks={books.filter(book =>
                        book.shelf === "currentlyReading"
                    )} />
                <h2 className="bookshelf-title">Want to Read</h2>
                <Books
                    onChangeShelf={this.props.onChangeShelf}
                    showingBooks={books.filter(book =>
                        book.shelf === "wantToRead"
                    )} />
                <h2 className="bookshelf-title">Read</h2>
                <Books
                    onChangeShelf={this.props.onChangeShelf}
                    showingBooks={books.filter(book =>
                        book.shelf === "read"
                    )} />

            </div>
        )
    }

}

export default BookShelf