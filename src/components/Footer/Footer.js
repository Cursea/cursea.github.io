import React from 'react'

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
  }

  return (
    <footer>
      <p style={footerStyle}>
        created by Marco Burman | 2020 |{' '}
        <a href="https://github.com/Cursea">Portfolio project</a>
      </p>
    </footer>
  )
}

export default Footer
