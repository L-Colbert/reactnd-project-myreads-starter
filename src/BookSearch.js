import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'
import * as BooksAPI from './BooksAPI'


class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        showingBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    // updateBooksArray = showingBooks => {
    //     BooksAPI.getAll().then((showingBooks) => {
    //         this.setState(({ showingBooks })
    //         )
    //     })
    // }


    render() {
        const { query, showingBooks } = this.state

        if (query) {
            BooksAPI.search(query).then((moreBooks) => {
                if (moreBooks.length && this.state.query.length) {
                    this.setState(({
                        showingBooks: moreBooks
                    }))
                }
                else {
                    this.setState(({
                        showingBooks: []
                    }))
                }
            })
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Books
                            showingBooks={this.state.showingBooks}
                            onChangeShelf={this.props.onChangeShelf}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch