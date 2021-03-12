let express = require('express'),
    router = express.Router(),
    logout = require('../models/visitor/logout.js');

router.post('/logout', function(req, res) {
  logout.logoutVisitor(req, res, function(err, data) {
    if (err) {
      res.json({ 'error': data.error, 'message': data.message });
    } else {
      res.json({ 'success': data.success, 'message': data.message });
    }
  });
});

module.exports = router;