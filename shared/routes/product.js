if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const Route = [
    {
        path: '/admin/product/add',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/product/productAdd')['default'])
            })
        }
    }
]

export default Route