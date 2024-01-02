const Product = require('../models/product');
const nodemailer = require('nodemailer');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/shop', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getHome = (req, res, next) => {
  res.render('shop/home', {
    pageTitle: 'Home'
});
};

exports.getGames = (req, res, next) => {
  res.render('shop/games', {
    pageTitle: 'Games'
  });
};

exports.getContact = (req, res, next) => {
  res.render('shop/contact', {
    pageTitle: 'Contact'
  });
};


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/shop', {
        prods: products,
        pageTitle: 'Shop'
      });
    })
    .catch(err => {
      console.log(err);
    });
};



exports.postSendEmail = (req, res, next) => {
  var from = req.body.from;
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'eriswebsend@gmail.com',
          pass: 'rpljeqpcktorjqqm'
      }
  });

  var mailOptions = {
      from: from,
      to: "eriswebsend@gmail.com",
      subject: "Name: " + subject + " | Contact Form | " + from,
      text: message
  }

  transporter.sendMail(mailOptions, function(error, info){
      if (error){
          console.log(error)
      } else {
          console.log("Email Send: " + info.res)
      }
      res.redirect("/")
  })
  
};