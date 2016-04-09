export default () => {
    var messageCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/message.min.css'], () => {
            const message = require('../../bower_components/semantic/dist/components/message.min.css');
            resolve(message)
        })
    })
    return Promise.all([messageCSS])
}