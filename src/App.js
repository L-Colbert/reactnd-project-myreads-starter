import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks />
                )} />
                {/* <Route exact path="/search" render={({ history }) => (
                    // <BookSearch />
                )}/> */}
            </div>
        )
    }
}

export default App
