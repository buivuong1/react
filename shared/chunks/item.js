export default () => {
    var itemCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/item.min.css'], () => {
            const item = require('../../bower_components/semantic/dist/components/item.min.css');
            resolve(item)
        })
    })
    return Promise.all([itemCSS])
}