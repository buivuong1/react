import AppComponent from './components/app'

if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        {
            path: '/admin/size/add',
            component: require('./components/admin/size/sizeAdd')['default']
        }
        /*{
            path: '/product',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                  cb(null, require('./components/product')['default'])
                })
            }
        },
        {
            path: '/about/:param',
            component: require('./components/about')['default']
        },
        {
            path: '/admin/editor',
            component: require('./components/admin/editor')['default']
        }*/
    ]
}

export {routes}