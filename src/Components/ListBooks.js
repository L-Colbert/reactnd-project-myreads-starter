import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            books={this.props.books}
                            onChangeShelf={this.props.onChangeShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="open-search"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks