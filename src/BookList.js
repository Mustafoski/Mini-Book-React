import React, { Component } from 'react';
import Book from './Book';
import booksData from './bookData';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: booksData };
  }

  handleDelete = id => {
    const sortedList = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: sortedList
    });
  };
  render() {
    return (
      <section>
        <h3>This is our BookList</h3>
        {this.state.books.map(item => {
          return (
            <Book key={item.id} info={item} handleDelete={this.handleDelete} />
          );
        })}
      </section>
    );
  }
}
