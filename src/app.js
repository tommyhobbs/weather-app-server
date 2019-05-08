const path = require('path');

const express = require('express');
const hbs = require('hbs');

// Define paths for Express config
const app = express();
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Tom Hobbs'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Tom Hobbs'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    body: 'Come here if you get stuck!',
    name: 'Tom Hobbs'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'its 50 degress',
    location: 'London'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMessage: 'Help article not found',
    name: 'Tom Hobbs'
  });
});
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found',
    name: 'Tom Hobbs'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
