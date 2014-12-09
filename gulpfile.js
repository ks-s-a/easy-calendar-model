var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('./views/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('develop', function () {
    nodemon({ script: 'server.js', ext: 'js jade', ignore: ['ignored.js'] })
        .on('change', ['jade'])
        .on('restart', function () {
            console.log('restarted!')
        })
})