import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChangeShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    state = {
        showingBooks: this.props.showingBooks
    }

    handleChange = e => {
        this.props.onChangeShelf(this.props.book, e.target.value)
    }

    render() {
        const { book } = this.props
        return (
            <div className="book-shelf-changer">
                <select
                    // sets menu selection to "none" if book.shelf's value is "undefined"
                    //then calls onChangeShelf to change the book's shelf 
                    //by changing it's book.shelf
                    value={book.shelf === undefined ? "none" : book.shelf}
                    onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None </option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf
