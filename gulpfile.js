/**
 * Created by lisheng on 15/7/19.
 */

var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload');


gulp.task('styles', function() {
  return gulp.src('stylesheets/screen.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('stylesheets'))
    .pipe(notify({ message: 'Styles task complete' }));
});
