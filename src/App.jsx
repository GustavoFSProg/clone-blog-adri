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
        <div
          style={{
            width: '98.8vw',
            height: '100vh',
            background: '#f2f2f2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <ContainerApp>
            <ImgBody src={foto1} alt="foto1" />
          </ContainerApp>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              // alignItems: 'flex-start',
              // marginRight: '30rem',
              justifyContent: 'left',
              marginLeft: '17px',
              marginTop: '11px',
            }}
          >
            <div
              style={{
                display: 'flex', width: '90%', marginTop: '5px',
                justifyContent: 'left'
              }}
            >
              <ImgFace src={face} alt="face" />
            </div>

            <div
              style={{
                display: 'flex',
                width: '90%',
                // alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '10px',
                marginLeft: '-6px',
              }}
            >
              <span
                style={{
                  width: '160px',
                  fontFamily: 'Roboto',
                  fontSize: '0.87rem',
                  paddingBottom: '2px',
                }}
              >
                Antonio Augusto
              </span>
              <span
                style={{
                  width: '160px',
                  paddingBottom: '2px',
                  fontFamily: 'Roboto',
                  fontSize: '0.77rem',
                }}
              >
                July 8
              </span>
            </div>
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
