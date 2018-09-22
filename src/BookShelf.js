import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
    render() {
        const { books } = this.props
        console.log(books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Books
                    showingBooks={books.filter(book => 
                        book.shelf === "currentlyReading"
                    )} />
                <h2 className="bookshelf-title">Want to Read</h2>
                <Books
                    showingBooks={books.filter(book => 
                        book.shelf === "wantToRead"
                    )} />
                <h2 className="bookshelf-title">Read</h2>
                <Books
                    showingBooks={books.filter(book => 
                        book.shelf === "read"
                    )} />

            </div>
        )
    }

}

export default BookShelf