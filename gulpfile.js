var gulp = require('gulp')
var concat = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')
var plumber = require('gulp-plumber')
var uglify = require('gulp-uglify')
var bytediff = require('gulp-bytediff')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src(['client/styles/global-variables.style.scss', 'client/styles/global.style.scss', 'client/**/*.style.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 2%']
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('client/styles/compiled'))
})

gulp.task('scripts', function () {
  return gulp.src(['client/client.module.js', 'client/modules/**/*.module.js', 'client/modules/**/*.js'])
	    .pipe(plumber())
			.pipe(concat('app.js', {newLine: ';'}))
			.pipe(ngAnnotate({add: true}))
	    .pipe(plumber.stop())
        .pipe(gulp.dest('client/scripts/compiled'))
})

gulp.task('prod', ['scripts'], function () {
  return gulp.src('client/scripts/compiled/app.js')
		.pipe(plumber())
			.pipe(bytediff.start())
				.pipe(uglify({mangle: true}))
			.pipe(bytediff.stop())
			.pipe(rename('app.min.js'))
		.pipe(plumber.stop())
		.pipe(gulp.dest('client/scripts/compiled/'))
})

gulp.task('watch', ['prod'], function () {
  gulp.watch('client/**/*.js', ['scripts'])
  gulp.watch('client/**/*.scss', ['sass'])
})

gulp.task('dev', ['scripts', 'sass', 'watch'])
