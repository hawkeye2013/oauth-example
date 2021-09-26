const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routers/auth');
require('./config/passport-setup');

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(
  cookieSession({
    name: 'oauth-example',
    keys: ['key1', 'key2'],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('home', {
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
