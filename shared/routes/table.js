if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const Route = [
    {
        path: '/admin/table/add',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/table/tableAdd')['default'])
            })
        }
    },
    {
        path: '/admin/table/edit/:id',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/table/tableEdit')['default'])
            })
        }
    },
    {
        path: '/admin/table/list',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/table/tableList')['default'])
            })
        }
    }
]

export default Route