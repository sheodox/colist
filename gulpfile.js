'use strict';
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    react = require('gulp-react'),
    webpack = require('webpack-stream'),
    runSequence = require('run-sequence');

gulp.task('transform', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    gulp.src('src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/style'));
});

gulp.task('bundle', function() {
    return gulp.src('dist/static/index.js')
        .pipe(webpack({
            output: {
                filename: 'index.js'
            }
        }))
        .pipe(gulp.dest('dist/static'));
});

gulp.task('default', function(callback) {
    runSequence('transform', 'bundle', 'sass', callback);
});