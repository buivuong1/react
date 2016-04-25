if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const Route = [
    {
        path: '/admin/size/add',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/size/sizeAdd')['default'])
            })
        }
    },
    {
        path: '/admin/size/edit/:id',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/size/sizeEdit')['default'])
            })
        }
    },
    {
        path: '/admin/size/list',
        getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../components/admin/size/sizeList')['default'])
            })
        }
    }
]

export default Route