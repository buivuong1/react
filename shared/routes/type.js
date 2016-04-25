if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const Route = [
    {
        path: '/admin/type/list',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/type/typeList')['default'])
            })
        }
    },
    {
        path: '/admin/type/add',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/type/typeAdd')['default'])
            })
        }
    },
    {
        path: '/admin/type/edit/:id',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/type/typeEdit')['default'])
            })
        }
    }
]

export default Route