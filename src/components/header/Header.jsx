import { Container, ImgLupa, ImgLogo, LinksContainer, Button, Input, Form } from './style'
import logo from '../../assets/logo.png'
import { BsSearch } from 'react-icons/bs'

function Header() {
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
      <LinksContainer>
        <h3>HOME</h3>
      </LinksContainer>
    </Container>
  )
}

export default Header
