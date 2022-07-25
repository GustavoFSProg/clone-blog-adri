import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'
import foto1 from './assets/foto1.png'
import face from './assets/face-icon.png'
import { ContainerApp, ImgBody, ImgFace, H1 } from './style'

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
            width: '99vw',
            height: '100vh',
            background: '#f2f2f2',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#f2f2f2',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'flex-start',

              // marginLeft: '13px'
            }}
          >
            <ContainerApp>
              <ImgBody src={foto1} alt="foto1" />
            </ContainerApp>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'left',
                marginLeft: '17px',
                marginTop: '11px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '90%',
                  marginTop: '5px',
                  justifyContent: 'left',
                }}
              >
                <ImgFace src={face} alt="face" />
              </div>

              <div
                style={{
                  display: 'flex',
                  width: '90%',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginTop: '14px',

                  marginLeft: '-4px',
                }}
              >
                <span
                  style={{
                    width: '160px',
                    fontFamily: 'Roboto',
                    fontSize: '0.84rem',
                    paddingBottom: '1px',
                    color: '#595959',
                  }}
                >
                  Antonio Augusto
                </span>
                <span
                  style={{
                    width: '160px',
                    paddingBottom: '2px',
                    fontFamily: 'Roboto',
                    fontSize: '0.76rem',
                    color: '#595959',
                  }}
                >
                  July 8
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '86%',
                alignItems: 'center',
                justifyContent: 'left',
                marginLeft: '45px',
              }}
            >
              <H1 >DEVELOPMENT WITH REACT-JS</H1>
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
