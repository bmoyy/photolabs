# Photolabs
The PhotoLabs project for the Lighthouse Labs Web Development bootcamp built with React. 

This project displays users' photos which can be filtered by topics. The user has the option to favourite a photo with the heart icon on the top left of the picture. The user can click on a photo to see a focused view, and suggestions for similar photos. The app gets its photo data through API calls to the backend server.

## Final Product

!["Screenshot of Home View"](https://github.com/bmoyy/photolabs/blob/main/docs/photolabs-homeview.PNG)
!["Screenshot of Modal View"](https://github.com/bmoyy/photolabs/blob/main/docs/photolabs-modalview.PNG)

# Getting Started

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```
Once you start the app, you can access Photolabs at <http://localhost:3000/> in your browser.

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

To start the API server:
```sh
cd backend
npm start
```

## Dependencies
- axios
- React
- Express
- body-parser
- cors