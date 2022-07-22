import { useState } from 'react'
import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          width: '98.8vw',
          height: '100vh',
          background: '#e6e6e6',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div>
          <Sidebarleft />
        </div>
        <div
          style={{ width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          CENTER
        </div>
        <div>
          <SidebarRight />
        </div>
      </div>
    </>
  )
}

export default App
