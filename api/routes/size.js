var SizeController = require('../controllers/SizeController');

module.exports = function(router){
    router.post('/size/add', SizeController.postAdd);
    router.post('/size/edit', SizeController.postEdit);
    router.post('/size/delete', SizeController.postDelete);
    router.get('/size/listAll', SizeController.getListAll);
    router.post('/size/detail', SizeController.postDetail);
}