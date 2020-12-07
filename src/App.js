import React, { useEffect, useState } from 'react'
import './App.css'
import FontCard from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'

const App = () => {
  const [customText, setCustomText] = useState('')
  const [sampleText, setSampleText] = useState('')

  const handleCustomTextChange = (event) => {
    setCustomText(event.target.value)
  }

  useEffect(() => {
    !customText ? setSampleText('Sample text') : setSampleText(customText)
  }, [customText])

  return (
    <>
      <HeaderNav />

      <main>
        <PageNav
          customText={customText}
          setCustomText={handleCustomTextChange}
        />

        <div id="content">
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
          <FontCard sampleText={sampleText} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
