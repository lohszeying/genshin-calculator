# Genshin Calculator

Genshin Calculator is a website made to calculate your Genshin Impact materials and what to farm.

The website can be accessed from [here](https://genshin-calculator-21d.web.app/).

The website is made using React as frontend and hosted on Firebase. The website was first done with frontend, including the calculations. The calculations are then shifted to backend once the frontend is done.

Express is used for backend and is hosted on Heroku.

# Features

Genshin Calculator includes the following:
- [Character EXP calculator](#character-exp-calculator)
- [Domain Farm Availability](#domain-farm-availability)
- [Talent Calculator](#talent-calculator)
- [Resin Material Calculator](#resin-material-calculator)

## Character EXP calculator

Easy to use calculator to calculate the number of EXP material you need to level a character.

## Domain Farm Availability

Farm your talent book sorted by days.

## Talent Calculator

Calculate the amount of green, blue and purple books you need based on your current character's talent level and target talent level.

## Resin Material Calculator

Calculate the amount of green, blue and purple resin material you are still short of by inputting the amount of material you have and the target number of resin material you need.

Resin Material Calculator works for both talent and weapon resin material calculation.

# How to set-up

Node should be installed prior to running the rest of the steps.

Go to each directory (api & client) and run npm install.

## Frontend

On the project root folder, navigate to `client` directory and run `npm install`.

### Local hosting

To run frontend on local host on development build, go to client directory and run `npm start` on your terminal. The localhost URL will be http://localhost:3000.

If backend is hosted externally, edit the .env file under client directory to your backend link, eg. `https://genshin-calculators.herokuapp.com/charExp/calculate`.

### Firebase

Set up [firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/), and set `client/build` as your public directory.

Under `client` directory, run `npm run build`.

Then, navigate to project root folder and run `firebase deploy`.

## Backend

### Local hosting

To run backend on local host, go to api directory and run `nodemon start` or `npm start` on your terminal.

Backend local hosting is done on http://localhost:5000.

### ~~Heroku~~

~~Push your project to Github then to Heroku via Github. It is important for root directory to contain `package.json` file as Heroku requires it. The current `package.json` file in root directory is used to set up backend only.~~

### Render

As of 15/01/23, backend is hosted with render.