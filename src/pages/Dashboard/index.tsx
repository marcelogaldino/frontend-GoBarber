import React from 'react'

import { FiPower } from 'react-icons/fi'
import { Container, Header, HeaderContent, Profile } from './styles'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/Auth'

const Dasboard: React.FC = () => {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />

          <Profile>
            <img src={user.getAvatarUrl} alt={user.name} />
            <div>
              <span>Bem vindo</span>
            </div>
            <div>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  )
}

export default Dasboard