const db = require('../util/Database').getDb;

exports.signup = (req, res, next) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;
  var gender = req.body.gender;

  var data = {
      "email" : email,
      "username": username,
      "password" : password,
      "phone": phone,
      "gender": gender
  }
  const db = getDb();
  db.collection('users').findOne({ $or: [{ email: email }, { username: username }] }, (err, user) => {
      if (err) {
          throw err;
      }
      if (user) {
          // if user already exists, display error message
          res.send("This email already exists! If you want to sign in, click on the Log in button")
      } else {
          // user does not exist, insert data into the collection
          db.collection('users').insertOne(data, (err, collection) => {
              if (err) {
                  throw err;
              }
              console.log("Record Inserted Successfully");
              return res.redirect('logged_in.ejs');
          });
      }
  });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  db.collection('users').findOne({ email: email }, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      // User with the given email does not exist
      res.send("This email doesn't exists! If you want to sign up, click on the Register button")
    }
    if (user.password !== password) {
      // Password is incorrect
     res.send("Incorrect password")
    }
    // Authentication successful
    console.log("User logged in successfully");
    return res.redirect('/logged_in.ejs');
  });
};

exports.getlogin = (req, res, next) => {
  res.render('shop/login', {
    pageTitle: 'login'
});
};