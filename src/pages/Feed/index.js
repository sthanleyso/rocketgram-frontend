import React, { Component } from 'react';

import { PostList, UserInfo } from './styles';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

export default class Feed extends Component {
  render() {
    return (
      <>
        <PostList>
          <article>
            <header>
              <UserInfo>
                <span>Sthanley Soares</span>
                <span className="place">Tacima, Paraíba</span>
              </UserInfo>
              <img src={more} alt="Mais" />
            </header>

            <img
              src="http://localhost:3333/files/wallhaven-767749.jpg"
              alt=""
            />

            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>145 curtidas</strong>

              <p>
                Um wallpaper muito massa do Wallhaven
                <span>#wallpaper #wallhaven #topzera</span>
              </p>
            </footer>
          </article>
        </PostList>

        <PostList>
          <article>
            <header>
              <UserInfo>
                <span>Sthanley Soares</span>
                <span className="place">Tacima, Paraíba</span>
              </UserInfo>
              <img src={more} alt="Mais" />
            </header>

            <img
              src="http://localhost:3333/files/wallhaven-767749.jpg"
              alt=""
            />

            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>145 curtidas</strong>

              <p>
                Um wallpaper muito massa do Wallhaven
                <span>#wallpaper #wallhaven #topzera</span>
              </p>
            </footer>
          </article>
        </PostList>
      </>
    );
  }
}
