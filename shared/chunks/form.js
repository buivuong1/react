export default () => {
    var formCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/form.min.css'], () => {
            const form = require('../../bower_components/semantic/dist/components/form.min.css');
            resolve(form)
        })
    })
    return Promise.all([formCSS])
}