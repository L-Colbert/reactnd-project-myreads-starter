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
            this.setState(({ books })
            )
        })
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        this.setState( )
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
