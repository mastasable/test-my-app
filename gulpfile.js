"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');

// Подключаемся к серверу

gulp.task('connect', function  () {
	connect.server({
		root: 'app',
		livereload: true
	});
	opn('http://localhost:8080/');
});

// html
gulp.task('html', function  () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

// js
gulp.task('js', function  () {
	gulp.src('./app/js/*.js')
		.pipe(connect.reload());
});

// css
gulp.task('css', function  () {
	gulp.src('./app/css*.css');
});

// Слежка

gulp.task('watch', function(){
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);