export default () => {
    var gridCSS = new Promise(resolve => {
        require.ensure(['../../bower_components/semantic/dist/components/grid.min.css'], () => {
            const grid = require('../../bower_components/semantic/dist/components/grid.min.css');
            resolve(grid)
        })
    })
    return Promise.all([gridCSS])
}