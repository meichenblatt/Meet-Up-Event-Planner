
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('default', ['styles', 'lint', 'browserSync'], function() {
	

	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch('**/*.js', ['lint']);
	gulp.watch('**/*.html').on('change', browserSync.reload);

	
});

// gulp.run('minify-css', function(){
// 			gulp.run('compress', function(){
// 				gulp.run('concat', function(){
// });
// 		});
// 	});

gulp.task('browserSync', function(cb){
	return browserSync.init({
		server: './src/'
	}, cb);
});


gulp.task('styles', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

gulp.task('lint', function () {
	return gulp.src(['**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
		//.pipe(eslint.failOnError());
});


gulp.task('serve:dist', ['concat'], function(){

	browserSync.init({
		server: './dist/'
	});

});


gulp.task('clean', function () {
	return gulp.src(['dist/tmpl','dist/css','dist/js','src/compressed'], {read: false})
        .pipe(clean());
});

gulp.task('tmpl',['clean'], function () {
	return gulp.src('src/tmpl/*/')
    .pipe(gulp.dest('dist/tmpl/'));
});

gulp.task('minify-css', ['tmpl'], function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', ['minify-css'], function (cb) {
  
  pump([
        gulp.src(['src/js/**/*.js', 'src/controllers/**/*.js']),
        uglify({mangle:false}),
        gulp.dest('src/compressed')
    ],
    cb
  );
  
});


gulp.task('concat', ['compress'], function() {
  return gulp.src(['./src/compressed/angular.min.js','./src/compressed/angular-route.min.js','./src/compressed/app.js','./src/compressed/events.js','./src/compressed/newevent.js','./src/compressed/newuser.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});