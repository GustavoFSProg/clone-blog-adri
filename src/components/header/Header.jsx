import { Container, ImgLogo, LinksContainer, Button, Input, Form } from './style'
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'

function Header() {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImgLogo src={logo} alt="logo" />
        <Form>
          <Input type="search" name="search" placeholder="Search..." />
          <Button type="submit">
            <img src={lupa} width="32" alt="lupa" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          </Button>
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
