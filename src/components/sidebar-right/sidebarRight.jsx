import { Container } from './style'
import imagem from '../../assets/left-image.jpeg'

function SidebarRight(){
  return (<Container>
    <div style={{ display: 'flex', flexDirection: 'column', height: '210px', alignItems: 'center', justifyContent: 'center' }}>
      <img src={imagem} alt="imagem" width="222" height="101" />
      <h2 style={{ fontSize: '22px', width: '85%', letterSpacing: '1px', fontFamily: 'Roboto', color: '#006bb3' }}>Android App and Site https</h2>
    </div>
  </Container>)
}

export default SidebarRight