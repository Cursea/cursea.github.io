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
  const [atBottom, setAtBottom] = useState(false)
  const [numberOfFonts, setNumberOfFonts] = useState(16)
  const [darkMode, setDarkMode] = useState(true)

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

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >=
      document.documentElement.offsetHeight
    ) {
      setAtBottom(true)
    }
  }

  useEffect(() => {
    if (!atBottom) return
    increaseNoOfFonts()
  }, [atBottom])

  const increaseNoOfFonts = () => {
    setNumberOfFonts((prev) => prev + 12)
    setAtBottom(false)
  }

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
            numberOfFonts={numberOfFonts}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
