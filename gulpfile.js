var gulp = require('gulp');
var uglify = require('gulp-uglify');
var child_process = require('child_process');

gulp.task('uglify', function(){
    return gulp.src('public/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'))
})

gulp.task('server', function(cb){
    child_process.exec('sudo nodemon --watch /home/buivuong/Desktop/best/node_modules/.bin/babel-node --exec babel-node server-render.js', function(err, stdout, stderr){
        console.log(stdout)
    })
})

gulp.task('client', function(cb){
    child_process.exec('sudo webpack', function(err, stdout, stderr){
        console.log(stdout)
    })
})