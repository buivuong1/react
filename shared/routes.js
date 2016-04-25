import AppComponent from './components/app'
/*import Table from './routes/table'
import Size from './routes/size'
import Type from './routes/type'*/
import Product from './routes/product'

const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        /*...Table,
        ...Size,
        ...Type,*/
        ...Product
    ]
}

export {routes}