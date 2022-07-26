import { Container, Button, ButtonDois } from './style'

function SidebarLeft() {
  return (
    <Container>
      <div style={{ ButtonDois, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{ width: '215px', lineHeight: '24px', fontSize: '0.8rem', fontFamily: 'Roboto' }}
          >
            <h2>DEVIL Place is a community of 881,454 amazing developers</h2>
          </p>
          <span
            style={{ width: '215px', lineHeight: '21px', fontSize: '1rem', fontFamily: 'Roboto' }}
          >
            We're a place where coders share, stay up-to-date and grow their careers.
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Button style={{}}>CREATE ACCOUNT</Button>

            <ButtonDois>Login</ButtonDois>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SidebarLeft
