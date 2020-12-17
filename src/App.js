import React, { useEffect, useState } from 'react'
import './App.css'
import FontCards from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'
import fontData from './fontData'

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
    setFonts(fontData)
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
