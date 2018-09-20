import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

class Books extends Component {
    render() {
        const { books, showingBooks } = this.props
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
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}>
                                    </div>
                                    <ChangeShelf />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

}

export default Books