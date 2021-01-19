import React, { useEffect, useState, useCallback } from 'react'
import './App.css'
import localStorageService from './localStorageService'
import FontCards from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'
require('dotenv').config()

const App = () => {
  const [filterText, setFilterText] = useState('')
  const [customText, setCustomText] = useState('')
  const [fonts, setFonts] = useState([])
  const [fontSize, setFontSize] = useState('16px')
  const [atBottom, setAtBottom] = useState(false)
  const [numberOfFonts, setNumberOfFonts] = useState(16)
  const [darkMode, setDarkMode] = useState(
    localStorageService.get('darkMode') === null
      ? true
      : localStorageService.get('darkMode')
  )

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

  const lightsOn = useCallback(() => {
    return darkMode
      ? document.body.classList.remove('light')
      : document.body.classList.add('light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    lightsOn()
  }, [darkMode, lightsOn])

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode)
    lightsOn()
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value)
  }

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value)
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
          customText={customText}
          setFilter={handleFilterChange}
          setCustomText={handleCustomTextChange}
          darkMode={darkMode}
          setDarkMode={handleDarkModeChange}
          setFontSize={handleFontSizeChange}
        />

        <div id="content">
          <FontCards
            filterText={filterText}
            customText={customText}
            fonts={fonts}
            numberOfFonts={numberOfFonts}
            fontSize={fontSize}
          />
        </div>
        <button id="return-to-the-top">↑</button>
      </main>

      <Footer />
    </>
  )
}

export default App
