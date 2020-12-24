import React, { useEffect, useState } from 'react'
import './App.css'
import FontCards from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'
require('dotenv').config()

const App = () => {
  const [filterText, setFilterText] = useState('')
  const [customText, setCustomText] = useState('')
  const [fonts, setFonts] = useState([])

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}&sort=trending`
      )

      const json = await response.json()
      return setFonts(json.items)
    }
    fetchData()
  }, [])

  return (
    <>
      <HeaderNav />

      <main>
        <PageNav
          filterText={filterText}
          setFilter={handleFilterChange}
          customText={customText}
          setCustomText={handleCustomTextChange}
        />

        <div id="content">
          <FontCards
            filterText={filterText}
            customText={customText}
            fonts={fonts}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
