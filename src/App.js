import React, { useState } from 'react'
import './App.css'
import FontCard from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'

const App = () => {
  const [customText, setCustomText] = useState([])

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value)
  }

  return (
    <>
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
    </>
  )
}

export default App
