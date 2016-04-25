var TypeController = require('../controllers/TypeController');

module.exports = function(router){
    router.post('/type/add', TypeController.postAdd);
    router.post('/type/edit', TypeController.postEdit);
    router.post('/type/delete', TypeController.postDelete);
    router.get('/type/listAll', TypeController.getListAll);
    router.post('/type/detail', TypeController.postDetail);
}