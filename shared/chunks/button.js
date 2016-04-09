export default () => {
    var buttonCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/button.min.css'], () => {
            const button = require('../../bower_components/semantic/dist/components/button.min.css');
            resolve(button)
        })
    })
    return Promise.all([buttonCSS])
}