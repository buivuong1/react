import AppComponent from './components/app';
import ProductComponent from './components/product';

const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        {
            path: '/product',
            component: ProductComponent
        },
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