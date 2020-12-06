import React from 'react'

const PageNav = () => {
  return (
    <nav id="major-nav">
      <label for="search">Search fonts</label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search fonts"
      />
      <label for="custom-text">Enter text</label>
      <input
        type="text"
        name="custom-text"
        id="custom-text"
        placeholder="Type something"
        onChange={this.updateValue()}
      />
      <label for="font-sizes"></label>
      <select id="font-sizes">
        <option value="26px">26px</option>
        <option value="28px">28px</option>
        <option value="30px">30px</option>
        <option value="32px">32px</option>
      </select>
      <div id="darkmode">
        <button class="darkmode-button" id="dark" type="button"></button>
        <button class="darkmode-button" id="light" type="button"></button>
      </div>
      <button id="list-mode" class="fas fa-list" type="button"></button>
      <button id="reset" class="fas fa-redo" type="button"></button>
    </nav>
  )
}

export default PageNav
