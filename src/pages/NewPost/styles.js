import styled from 'styled-components';

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #dddddd;

  input {
    margin-bottom: 10px;
  }

  input[type="text"] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 0 20px;
    font-size: 0.875em;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background-color: #7159c1;
    color: #ffffff;
    font-size: 0.875em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.8;
    transition: 0.3s
  }
`;
