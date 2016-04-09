export default () => {
    var inputCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/input.min.css'], () => {
            const input = require('../../bower_components/semantic/dist/components/input.min.css');
            resolve(input)
        })
    })
    return Promise.all([inputCSS])
}