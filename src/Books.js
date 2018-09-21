import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'


class Books extends Component {
    static propTypes = {
        showingBooks: PropTypes.array.isRequired,
    }

    render() {
        const { showingBooks } = this.props
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks.map((book) => (
                        <li key={book.id} >
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : `url(./icons/rhino.jpg)`
                                        }}>
                                    </div>
                                    <ChangeShelf />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors ? book.authors : `Author: Not Available`}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

}

export default Books