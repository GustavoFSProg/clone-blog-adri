import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'
import foto1 from './assets/foto1.png'
import { ContainerApp, ImgBody } from './style'

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

        <ContainerApp>
          <ImgBody src={foto1} alt="foto1" />
        </ContainerApp>
        <div>
          <SidebarRight />
        </div>
      </div>
    </>
  )
}

export default App
