const Photo = require('../models/Photo');

exports.getAddPage = (req, res) => {
    res.render('add');
  };

  exports.getServicesPage = (req, res) => {
    res.render('services');
  };

  exports.getAboutPage = (req, res) => {
    res.render('about');
  };

  exports.getTeamPage =  (req, res) => {
    res.render('team');
  };

  exports.getEditPage = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    res.render('edit', {
      photo,
    });
  }

 