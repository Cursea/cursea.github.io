import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faList,
  faRedo,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import './PageNav.css'

const PageNav = ({
  filterText,
  setFilter,
  customText,
  setCustomText,
  darkMode,
  setDarkMode,
  setFontSize,
}) => {
  let icon = darkMode ? faSun : faMoon

  return (
    <nav id="major-nav">
      <label htmlFor="search">Search fonts</label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search fonts"
        value={filterText}
        onChange={setFilter}
      />
      <div className="divider"></div>
      <label htmlFor="custom-text">Enter text</label>
      <input
        type="text"
        name="custom-text"
        id="custom-text"
        placeholder="Type something"
        value={customText}
        onChange={setCustomText}
      />
      <div className="divider"></div>
      <label htmlFor="font-sizes"></label>
      <select id="font-sizes" onChange={setFontSize}>
        <option value="16px">16px</option>
        <option value="24px">24px</option>
        <option value="33px">32px</option>
        <option value="40px">40px</option>
      </select>
      <div className="divider"></div>
      <div id="darkmode-setting">
        <label htmlFor="darkmode-checkbox" id="darkmode-label">
          <FontAwesomeIcon icon={icon} />
        </label>
        <input
          type="checkbox"
          id="darkmode-checkbox"
          value={darkMode}
          onClick={setDarkMode}
        ></input>
      </div>
      <button id="list-mode" className="fas fa-list" type="button">
        <FontAwesomeIcon icon={faList} />
      </button>
      <button id="reset" className="fas fa-redo" type="button">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </nav>
  )
}

export default PageNav
