var SizeController = require('../controllers/SizeController');

module.exports = function(router){
    router.post('/size/add', SizeController.postAdd);
}