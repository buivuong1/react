export default () => {
    var labelCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/label.min.css'], () => {
            const labelCSS = require('../../bower_components/semantic/dist/components/label.min.css');
            resolve(labelCSS)
        })
    })
    return Promise.all([labelCSS])
}