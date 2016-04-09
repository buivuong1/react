export default () => {
    var containerCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/container.min.css'], () => {
            const container = require('../../bower_components/semantic/dist/components/container.min.css');
            resolve(container)
        })
    })
    return Promise.all([containerCSS])
}