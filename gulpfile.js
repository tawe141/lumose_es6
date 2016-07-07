var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var b = watchify(browserify({
    entries: './src/client.js',
    debug: true,
    transform: [babelify]
}));

function bundle() {
    return b.bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'));
}

gulp.task('default', bundle);
b.on('update', bundle);
b.on('log', gutil.log);
