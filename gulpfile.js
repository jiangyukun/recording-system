var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var lessBasePath = 'src/less/';

var lessDistPath = 'src/css';

var edcProjectPath = 'D:/2016/projects/tigermed-app/edc/src/main/webapp/recording-system/';
lessBasePath = edcProjectPath + 'less/';
lessDistPath = edcProjectPath + 'build/';

function handleLess(src, distPath, name) {
    gulp.src(src).pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less()).pipe(concat(name)).pipe(gulp.dest(distPath));
}

gulp.task('less', function () {
    handleLess(lessBasePath + 'core.less', lessDistPath, 'core.css');
    handleLess(lessBasePath + 'app.less', lessDistPath, 'app.css');
    handleLess(lessBasePath + 'login.less', lessDistPath, 'login.css');
});
gulp.task('watch', function () {
    gulp.watch(lessBasePath + '**/*.less', ['less']);
});
