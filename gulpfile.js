const fs = require('fs');
const gulp = require('gulp');
const pug = require('gulp-pug');
const concatCss = require('gulp-concat-css');
const cleanCss = require('gulp-clean-css');

gulp.task('styles', () => {
	return gulp.src('./styles/**/*.css')
		.pipe(concatCss('bundle.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['styles'], () => {
	const styles = fs.readFileSync('./bundle.css').toString();
	return gulp.src('./pugs/index.pug')
		.pipe(pug({
			locals: {
				styles,
			},
		}))
		.pipe(gulp.dest(__dirname));
});
