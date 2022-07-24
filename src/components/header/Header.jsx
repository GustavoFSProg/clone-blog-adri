import { Container, ImgLogo, LinksContainer, Button, Input, FormDois, Form } from './style'
import logo from '../../assets/logo.png'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleLike() {
    setIsButtonClicked('flex')
  }

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImgLogo src={logo} alt="logo" />
        <Form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Input type="search" name="search" placeholder="Search..." />

            <BsSearch size="26" color="gray" style={{ marginLeft: '8px' }} />
          </div>
        </Form>
      </div>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      ></div>

      <Button
        onMouseLeave={() => handleDismissButtonClicked()}
        type="button"
        onClick={() => handleLike()}
      >
        <MenuIcon />
      </Button>

      <LinksContainer>
        <h3>HOME</h3>
      </LinksContainer>

      <FormDois
        style={{
          display: `${isButtonClicked}`,
          marginTop: '121px',
          marginLeft: '-280px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '18rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            style={{ width: '14rem' }}
            type="search"
            name="search"
            placeholder="Search..."
          />

          <BsSearch size="26" color="gray" style={{ marginLeft: '8px' }} />
        </div>
      </FormDois>
    </Container>
  )
}

export default Header
