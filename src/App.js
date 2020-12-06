import React, { useState } from 'react'
import './App.css'
import FontCard from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'

function App() {
  const [customText, setCustomText] = useState([])

  return (
    <>
      <body>
        <HeaderNav />

        <main>
          <PageNav />

          <div id="content">
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
          </div>
        </main>

        <Footer />
      </body>
    </>
  )
}

export default App
