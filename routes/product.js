var ProductController = require('../controllers/ProductController');

module.exports = function(router){
    router.get('/admin/product/add', ProductController.getAdminProductAdd);
}