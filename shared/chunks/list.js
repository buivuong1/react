export default () => {
    var listCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/list.min.css'], () => {
            const listCSS = require('../../bower_components/semantic/dist/components/list.min.css');
            resolve(listCSS)
        })
    })
    return Promise.all([listCSS])
}