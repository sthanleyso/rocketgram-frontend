import React from 'react';
import { Link } from 'react-router-dom';

import { MainHeader, HeaderContent } from './styles';
import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

export default function Header() {
  return (
    <MainHeader>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="RocketGram" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação" />
        </Link>
      </HeaderContent>
    </MainHeader>
  );
}
