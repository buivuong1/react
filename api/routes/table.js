var TableController = require('../controllers/TableController');

module.exports = function(router){
    router.post('/table/add', TableController.postAdd);
    router.post('/table/edit', TableController.postEdit);
    router.post('/table/delete', TableController.postDelete);
    router.get('/table/listAll', TableController.getListAll);
    router.post('/table/detail', TableController.postDetail);
}