var UsersController = require('../controllers/UsersController');

module.exports = function(router){
    router.post('/users/login', UsersController.postLogin);
}