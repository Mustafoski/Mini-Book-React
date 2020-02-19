import React, { Component } from 'react';

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1, name: 'john', showInfo: true };
  }

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;
    console.log(this.props);

    const toggleInfo = () => {
      this.setState({ showInfo: !this.state.showInfo });
    };

    return (
      <div className='book'>
        <img src={img} alt='image' width='150' />
        <div>
          <h4>Title: {title}</h4>
          <h4>Author: {author}</h4>
          <button type='button' onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button type='button' onClick={() => toggleInfo()}>
            Toggle
          </button>
          {this.state.showInfo ? (
            <p>
              Officia adipisicing reprehenderit est eiusmod labore aliquip Lorem
              magna nostrud dolor Lorem. Qui velit culpa sunt enim do aliqua
              nisi sit magna ex Lorem. Ullamco incididunt esse elit occaecat
              sunt non magna est nisi anim. Id laborum adipisicing non mollit
              deserunt voluptate cupidatat commodo laborum culpa.
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}
