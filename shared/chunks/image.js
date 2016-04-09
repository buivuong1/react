export default () => {
    var imageCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/image.min.css'], () => {
            const image = require('../../bower_components/semantic/dist/components/image.min.css');
            resolve(image)
        })
    })
    return Promise.all([imageCSS])
}