const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/Database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const AuthenticationRoutes = require('./routes/Authentication');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(AuthenticationRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});

