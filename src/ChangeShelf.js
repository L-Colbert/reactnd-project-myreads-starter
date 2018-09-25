import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChangeShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, onChangeShelf } = this.props

            return (
                <div className="book-shelf-changer">
                    <select
                        // sets menu selection to "none" if book.shelf's value is "undefined"
                        //then calls onChangeShelf to change the book's shelf 
                        //by changing it's book.shelf
                        value={book.shelf === undefined ? "none" : book.shelf}
                        onChange={(e) => onChangeShelf(book, e.target.value)}>
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
