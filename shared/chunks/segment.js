export default () => {
    var segmentCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/segment.min.css'], () => {
            const segment = require('../../bower_components/semantic/dist/components/segment.min.css');
            resolve(segment)
        })
    })
    return Promise.all([segmentCSS])
}