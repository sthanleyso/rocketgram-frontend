import styled from 'styled-components';

export const PostList = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 580px;
  padding: 0 30px;

  article {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-top: 30px;

    > img {
      width: 100%;
    }
  }

  header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer {
    padding: 20px;

    div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      button {
        background: transparent;
        border: 0;
        cursor: pointer;
        height: 20px;
      }

      img {
        height: 20px;
        margin-right: 10px;
      }
    }

    p {
      font-size: 0.8125em;
      margin-top: 2px;
      line-height: 1.8125em;

      span {
        display: block;
        color: #7159c1;
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:last-child {
    font-size: 0.6875em;
    color: #666666;
    margin-top: 3px;
  }
`;
