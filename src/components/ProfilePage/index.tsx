import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Breno Vitório</h1>
        <h2>@brenu</h2>

        <p>
          Developer at <a href="https://tecnojr.com.br">@TecnoJr</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de Dezembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>230</strong>
          </span>
          <span>
            <strong>89 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
