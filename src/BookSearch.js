import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import Books from './Books'



class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        // onDeleteContact: PropTypes.func.isRequired
        // onSearchContact: ProTyples.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        //search code from Udacity React Course
        //http://
        const { books } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) => match.test(book.author) || match.test(book.name))
        } else {
            showingBooks = books
        }
        // showingBooks.sort(sortBy('author'))


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Books
                            showingBooks={showingBooks}
                            />
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch