'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var markJSON = require('markit-json');
var docUtil = require('amazeui-doc-util');

gulp.task('markdoc', function(){
  return gulp.src('./README.md')
    .pipe(markJSON(docUtil.markedOptions))
    .pipe(docUtil.applyTemplate())
    .pipe($.rename(function(file) {
      file.extname = '.html';
    }))
    .pipe(gulp.dest('./dist'));
});
