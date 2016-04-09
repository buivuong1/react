export default () => {
    var dividerCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/divider.min.css'], () => {
            const divider = require('../../bower_components/semantic/dist/components/divider.min.css');
            resolve(divider)
        })
    })
    return Promise.all([dividerCSS])
}