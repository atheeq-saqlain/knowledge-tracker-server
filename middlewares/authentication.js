const ADMIN_AUTH_KEY = 'lsdfnllksffonlsdj3lknw3';

exports.isAuthenticated = function (req, res, next) {
  let auth = req.isAuthenticated();
  console.log('is user authenticated : ', auth);
  if (auth) {
    return next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

exports.isAuthorized = function (roles) {
  return (req, res, next) => {
    console.log('checking for roles ... : ', roles);
    console.log('user to authorize : ', req.user);
    return next();
  };
};

exports.authorizeAdminKey = function (req, res, next) {
  // change it to token or header later
  console.log('authorizing admin key');
  let reqAuthKey = req.body.adminKey;
  if (reqAuthKey && reqAuthKey == ADMIN_AUTH_KEY) {
    return next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
