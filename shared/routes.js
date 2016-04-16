/*import AppComponent from './components/app'
import ProductComponent from './components/product'
import AboutComponent from './components/about'
import UserLoginComponent from './components/user/login'
import UserProfileComponent from './components/user/profile'*/

/* DOCUMENTATION */
/*import DocButtonComponent from './components/doc/button'
import DocDividerComponent from './components/doc/divider'
import DocHeaderComponent from './components/doc/header'*/
/* END DOCUMENTATION */

import AppComponent from 'components/app'

if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        {
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
            /*getComponent(location, cb) {
                require.ensure([], (require) => {
                  cb(null, require('./components/about')['default'])
                })
            }*/
        },
        /*{
            path: '/login',
            component: UserLoginComponent
        },
        {
            path: '/user/profile',
            component: UserProfileComponent 
        },
        {
            path: '/doc/button',
            component: DocButtonComponent
        },
        {
            path: '/doc/divider',
            component: DocDividerComponent
        },
        {
            path: '/doc/header',
            component: DocHeaderComponent
        }*/
    ]
}

export {routes}