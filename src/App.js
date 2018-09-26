import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Components/ListBooks'
import BookSearch from './Components/BookSearch'

class App extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(({ books })
            )
        })
    }

    changeShelf = (book, shelf) => {
        console.log(`i'm changing shelf for ${book.title}`)
        BooksAPI.update(book, shelf)
        BooksAPI.getAll().then((books) => {
            this.setState(({ books })
            )
        })
        .catch(err => {
            console.log(`failed with ${err}`)
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        onChangeShelf={this.changeShelf}
                    />
                )} />
                <Route exact path="/search" render={({ history }) => (
                    <BookSearch
                        books={this.state.books}
                        onChangeShelf={this.changeShelf}
                    />
                )} />
            </div>
        )
    }
}

export default App
