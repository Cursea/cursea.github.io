# Font of all Fonts

'Font of all Fonts' is a portfolio project written in React with the aim of cloning [Google Fonts](https://fonts.google.com/).

This started out as a vanilla JS clone (['Favourite-Fonts'](https://github.com/Cursea/Favourite-Fonts)) before I chose to convert what I had to React, using create-react-app to kick it off.

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