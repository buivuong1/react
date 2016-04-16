export default () => {
    var jquery = new Promise(resolve => {
        require.ensure(['../../../bower_components/jquery/dist/jquery.min.js'], () => {
            const jquery= require('../../../bower_components/jquery/dist/jquery.min.js');
            resolve(jquery)
        })
    })    
    var timedropperCSS = new Promise(resolve => {
        require.ensure(['../../../bower_components/timedropper/timedropper.min.css'], () => {
            const timedropper= require('../../../bower_components/timedropper/timedropper.min.css');
            resolve(timedropper)
        })
    })
    var timedropperJS = new Promise(resolve => {
        require.ensure(['../../../bower_components/timedropper/timedropper.min.js'], () => {
            const timedropper = require('../../../bower_components/timedropper/timedropper.min.js');
            resolve(timedropper)
        })
    })
    return Promise.all([jquery, timedropperCSS, timedropperJS])
}