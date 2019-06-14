import React, { Component } from 'react';
import api from '../../services/api';

import { PostForm } from './styles';

export default class NewPost extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    const { ...state } = this.state;

    data.append('image', state.image);
    data.append('author', state.author);
    data.append('place', state.place);
    data.append('description', state.description);
    data.append('hashtags', state.hashtags);

    await api.post('posts', data);

    this.props.history.push('/');
  }

  render() {
    const { ...state } = this.state;

    return (
      <PostForm onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          onChange={this.handleChange}
          value={state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Local"
          onChange={this.handleChange}
          value={state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          onChange={this.handleChange}
          value={state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags"
          onChange={this.handleChange}
          value={state.hashtags}
        />
        <button type="submit">Enviar</button>
      </PostForm>
    );
  }
}
