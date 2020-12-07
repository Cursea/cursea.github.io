# Font-of-all-fonts

React version of 'Favourite-Fonts' solo project

**TODO:**

- [x] Sort out entry into app. Probably remove <body> tags from App.js JSX and let public/index.html + #root wrap the app
- [ ] Dynamically provide different font names to each card (handle via state)
- [ ] Find out how to import Font Awesome icons

_Style_

- [ ] Sample text in each card should be displayed in the corresponding font
- [ ] Buttons/links should be evident _(make sure the cursor changes, etc.)_
- [ ] Implement a way to handle overflow from sample text in font cards, as the font size is adjustable

_Functionality_

- [ ] Text typed into the custom text (type something) box should immediately change the sample text displayed in each font card
- [ ] The sample text should return to the default sample if the input box (type something) no longer has any input _(ex. input == "")_
- [ ] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [ ] Implement the clickable 'reset' icon on the far right of the major navigation; it should make the page appear as if the user reloaded the page _(do not actually reload the page)_

_Finalisation_

- [ ] No dev console errors upon using the app
- [ ] Add robust README.md

**Extras**

- [ ] Include a back-to-top button that allows users to scroll to the top once the top of the page is out of view
- [ ] Make the design fully responsive _(small/large/portrait/landscape, etc.)_
- [ ] Implement the light/dark mode toggle buttons
- [ ] Implement the change display icon so you can flip between a grid and list layout for the font cards
