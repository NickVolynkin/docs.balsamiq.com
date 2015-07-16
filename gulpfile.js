// LOAD
var gulp = require("gulp"),
  util = require("gulp-util"),
  sass = require("gulp-sass"),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  del = require('del'),
  watch = require('gulp-watch'),
  log = util.log;

// TASKS

// Build CSS
gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 2 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("./src/build-css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./themes/docs-balsamiq-com/static/css'))    .pipe(notify({ message: 'Sass task complete' }));
});

// Minify JS
gulp.task('js', function() {
  log("Minify JS files " + (new Date()).toString());
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('dbc.js'))
    .pipe(gulp.dest('./src/build-js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./themes/docs-balsamiq-com/static/js'))
    .pipe(notify({ message: 'JS Minify task complete' }));
});

// Get Header/Footer Includes from balsamiq.com
gulp.task('getincludes', function() {
  log("Get Includes from balsamiq.com " + (new Date()).toString());
  return gulp.src(['../balsamiq.com/includes/_tpl_header_nav.inc', '../balsamiq.com/includes/_tpl_end.inc'])
    .pipe(gulp.dest('./themes/docs-balsamiq-com/layouts/partials/'))
    .pipe(notify({ message: 'Get Header Footer Includes task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['./themes/docs-balsamiq-com/static/css', './themes/docs-balsamiq-com/static/js'], cb)
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'js', 'getincludes');
});

// WATCH
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./src/sass/**/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('./src/js/**/*.js', ['js']);

});
