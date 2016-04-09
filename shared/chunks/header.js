export default () => {
    var headerCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/header.min.css'], () => {
            const header = require('../../bower_components/semantic/dist/components/header.min.css');
            resolve(header)
        })
    })
    return Promise.all([headerCSS])
}