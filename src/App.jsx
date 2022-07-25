import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'
import foto1 from './assets/foto1.png'
import face from './assets/face-icon.png'
import { ContainerApp, ImgBody, ImgFace } from './style'

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          width: '98.8vw',
          height: '100vh',
          background: '#f2f2f2',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <Sidebarleft />
        </div>
        <div style={{
          width: '98.8vw',
          height: '100vh',
          background: '#f2f2f2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'

        }}>

        <ContainerApp>
          <ImgBody src={foto1} alt="foto1" />
          </ContainerApp>
          <div style={{ display: 'flex', width: '90%', marginTop: '10px', justifyContent: 'left' }}>

          <ImgFace src={face} alt="face" />
          </div>
        </div>

        <div>
          <SidebarRight />
        </div>
      </div>
    </>
  )
}

export default App
