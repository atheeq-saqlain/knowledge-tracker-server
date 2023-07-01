// TODO: move the express related part to middelware and keep the logic here

const passport = require('passport');

exports.login = function (req, res, next) {
  passport.authenticate('local', function (err, user, info, status) {
    console.log('logging in user : ', user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send('redirecting to signin page');
    }
    req.login(user, (error) => {
      if (error) throw error;
      res.status(200).jsonp(user);
    });
  })(req, res, next);
};

exports.logout = function (req, res, next) {
  req.logOut((err) => {
    if (err) {
      res.status(500).send('Error logging out');
    } else res.status(200).send('logged out successfully !!');
  });
};
