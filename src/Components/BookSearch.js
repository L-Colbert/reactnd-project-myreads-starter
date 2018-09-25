import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'
import * as BooksAPI from '../BooksAPI'


class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: [],
        showingBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    componentDidUpdate() {
        const { query } = this.state
        const { books } = this.props

        if (query) {
            BooksAPI.search(query).then((moreBooks) => {
                //if input is received and books were found, then 
                //set the state of showingBooks to the resulting arrat
                if (moreBooks.length && query.length) {
                    moreBooks.forEach(bk => {
                        books.forEach(origBk => {
                            if (bk.id === origBk.id && bk.shelf !== origBk.shelf) bk.shelf = origBk.shelf
                        })
                    })
                    this.setState(({
                        showingBooks: moreBooks
                    }))
                }
                else {
                    // if no results were found from the query,
                    //show no books
                    this.setState(({
                        showingBooks: []
                    }))
                }
            })
        }
    }


    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            //update the query text as the user types
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