# Font of all Fonts

'Font of all Fonts' is a portfolio project written in React with the aim of cloning [Google Fonts](https://fonts.google.com/).
\
\
This app is currently hosted via Github pages, so go check it out! https://cursea.github.io/

![App](images/font_of_all_fonts.png)

This started out as a vanilla JS clone before I chose to convert what I had to React, using create-react-app to kick it off.

See [ProjectRequirements.md](ProjectRequirements.md) for progress.

## To run locally

Running locally requires you provide *your own* [google api key](https://developers.google.com/fonts/docs/developer_api#APIKey) (step 5)

1. Download [node.js](https://nodejs.org/en/)
2. Clone this repo to your computer
3. Navigate to the project directory in Node
4. run `npm install`
5. Add a file to the top level folder, and name it `.env`. Inside, paste in your google api key in the format
`REACT_APP_API_KEY = 'YOUR KEY HERE'`
6. run `npm start`
7. The app should open up a new tab in your browser, pointing to http://localhost:3000/