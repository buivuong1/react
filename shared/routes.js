import AppComponent from './components/app'
import ProductComponent from './components/product'
import AboutComponent from './components/about'
import UserLoginComponent from './components/user/login'

const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        {
            path: '/product',
            component: ProductComponent
        },
        {
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/login',
            component: UserLoginComponent
        }
        /*{
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/todo',
            component: TodoComponent
        },
        {
            path: '/test',
            component: TestComponent
        }*/
    ]
}

export {routes};