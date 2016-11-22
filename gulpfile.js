// Include gulp
var gulp = require('gulp');
 
// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleancss = require('gulp-clean-css');
 
// Lint Task
gulp.task('lint', function() {
return gulp.src('js/*.js')
.pipe(jshint())
.pipe(jshint.reporter('default'));
});
 
// Compile Our Sass
gulp.task('sass', function() {
return gulp.src([
'node_modules/bootstrap-sass/assets/stylesheets/*.scss',
'scss/*.scss'
])
.pipe(sass())
.pipe(cleancss())
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('dist/css'));
});
 
// Concatenate & Minify JS
gulp.task('scripts', function() {
return gulp.src([
'node_modules/jquery/dist/jquery.js',
'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
'js/*.js'
])
.pipe(concat('all.js'))
.pipe(gulp.dest('dist/js'))
.pipe(rename('all.min.js'))
.pipe(uglify())
.pipe(gulp.dest('dist/js'));
});
 
gulp.task('bootstrap', function() {
return gulp.src([
'node_modules/bootstrap-sass/assets/fonts/**/*'
])
.pipe(gulp.dest('dist/fonts'));
});
 
// Watch Files For Changes
gulp.task('watch', function() {
gulp.watch('js/*.js', ['lint', 'scripts']);
gulp.watch('scss/*.scss', ['sass']);
});
 
// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'bootstrap']);