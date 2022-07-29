import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'
// import foto1 from './assets/foto1.png'
import face from './assets/face-icon.png'
import api from './api'
import {
  ContainerApp,
  ContainerParagraph,
  ContainerWrapper,
  Span,
  ImgBody,
  ImgFace,
  H1,
  AutorContainer
} from './style'
import { useEffect, useState } from 'react'

function App() {
  const [post, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  async function handlePosts() {
    const { data } = await api.get(`/all`)

    setPosts(data)
  }

  useEffect(() => {
    handlePosts()
  }, [])
  return (
    <>
      <div
        style={{
          width: '98.8vw',
          height: '100vh',
          background: '#f2f2f2',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',

        }}
      >
        <Header />
        <div
          style={{
            width: '98.8vw',
            height: '100%',
            background: '#f2f2f2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

          }}
        >
        <div>
          <Sidebarleft />
        </div>

        <ContainerWrapper>
          <div
            style={{
              // background: 'blue',

              display: 'flex',
                justifyContent: 'top',
              flexDirection: 'column',
              alignItems: 'flex-start',

              // marginLeft: '13px'
            }}
          >
            {post.map((item) => {
              return (
                <div
                  style={{
                    // background: 'blue',

                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '60px'



                    // marginLeft: '13px'
                  }}
                  key={item.id

                  }>
                  <ContainerApp>
                    <ImgBody src={item.image} alt="foto1" />
                  </ContainerApp>
                  <AutorContainer

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
                        {item.autor}
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
                        {item.createdAt}
                      </span>
                    </div>
                  </AutorContainer>
                  <div
                    style={{
                      display: 'flex',
                      width: '88%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '45px',
                    }}
                  >
                    <H1>{item.title}</H1>
                  </div>

                  <ContainerParagraph>
                    <Span>TEXTO: {item.text}</Span>
                  </ContainerParagraph>
                </div>
              )
            })}
          </div>
        </ContainerWrapper>

        <div>
          <SidebarRight />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
