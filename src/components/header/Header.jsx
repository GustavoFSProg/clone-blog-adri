import { Container, Button, Input, Form } from './style'
import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'

function Header() {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" width="42" height="40" />
        <Form>
          <Input type="search" name="search" placeholder="Search..." />
          <Button type="submit">
            <img
              src={lupa}
              width="32"
              alt="lupa"
            />
          </Button>
        </Form>
      </div>
      <div style={{ display: 'flex', width: '25%' }}></div>
      <h3>HOME</h3>
      <h3>REGISTER</h3>
    </Container>
  )
}

export default Header
