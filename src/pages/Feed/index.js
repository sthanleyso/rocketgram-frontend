import React, { Component } from 'react';
import api from '../../services/api';

import { PostList, UserInfo } from './styles';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

export default class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get('posts');

    this.setState({ feed: response.data });
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    const { feed } = this.state;

    return (
      <PostList>
        {feed.map(post => (
          <article key={post._id}>
            <header>
              <UserInfo>
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </UserInfo>
              <img src={more} alt="Mais" />
            </header>

            <img src={`http://localhost:3333/files/${post.image}`} alt="" />

            <footer>
              <div>
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="Curtir" />
                </button>
                <img src={comment} alt="Comentar" />
                <img src={send} alt="Enviar" />
              </div>

              <strong>{post.likes} curtidas</strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </PostList>
    );
  }
}
