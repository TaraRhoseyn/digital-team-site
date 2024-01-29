require = require('esm')(module);
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// minifies javascript files
gulp.task('minify-js', function () {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// minifies css files
gulp.task('minify-css', function () {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// converts png to webp files
gulp.task('convert-to-webp', function () {
    return gulp.src('assets/img/**/*.png')
      .pipe(rename({ extname: '.webp' }))
      .pipe(gulp.dest('dist/img'));
});

// runs all tasks via 'gulp' command
gulp.task('default', gulp.series(
    'minify-js', 
    'minify-css',
    'convert-to-webp'
));
