import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'

class App extends React.Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
            console.log(books)
        })
    }

    updateShelf(book, shelf) {
        BooksAPI.update(book, shelf).then((book) => {
            this.setState(state => ({
                books : state.books}))
        })
    }

    searchBooks(query) {
        BooksAPI.search(query).then(books => {
            this.setState({ books })
        } )
    }
        
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                    />
                )} />
                <Route exact path="/search" render={({ history }) => (
                    <BookSearch
                        books={this.state.books}
                    />
                )} />
            </div>
        )
    }
}

export default App
