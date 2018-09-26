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
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(({ books })
            )
        })
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateShelf(query)
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    updateShelf = query => {

        if (!query.length) {
            return this.setState(({
                showingBooks: []
            }))
        }

        BooksAPI.search(query).then(moreBooks => {
            if (moreBooks.error) {
                return this.setState(({
                    showingBooks: []
                }))
            } else {
                //filter code learned from "Tutorial Requests: FEND Project 6 - Walk Through (LONG)"
                //by Ryan White
                moreBooks.forEach(result => {
                    let filteredResults = this.state.books.filter(origbook =>
                        result.id === origbook.id
                    )
                    if (filteredResults[0])
                        result.shelf = filteredResults[0].shelf
                })
                return this.setState(({ showingBooks: moreBooks }))
            }
        }).catch(err => {
            (console.log(`Unable to retrieve results ${err}`))
        })
    }

    render() {
        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            autoFocus
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