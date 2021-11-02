const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo');
const fs = require('fs');
const photoController = require('./controllers/photoControllers')
const pageController = require('./controllers/pageController');

const app = express();

mongoose.connect('mongodb://localhost/agency-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/add', pageController.getAddPage);

app.get('/services', pageController.getServicesPage);

app.get('/team',pageController.getTeamPage);

app.get('/about', pageController.getAboutPage);

app.get('/photos/edit/:id', pageController.getEditPage);


app.get('/',photoController.getAllPhotos);

app.get('/photos/:id', photoController.getPhoto);




app.post('/photos', photoController.createPhoto);



app.put('/photos/:id', photoController.updatePhoto);

app.delete('/photos/:id', photoController.deletePhoto);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
