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
      <label htmlFor="custom-text">Enter text</label>
      <input
        type="text"
        name="custom-text"
        id="custom-text"
        placeholder="Type something"
        value={customText}
        onChange={setCustomText}
      />
      <label htmlFor="font-sizes"></label>
      <select id="font-sizes">
        <option value="26px">26px</option>
        <option value="28px">28px</option>
        <option value="30px">30px</option>
        <option value="32px">32px</option>
      </select>
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
