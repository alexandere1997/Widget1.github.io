'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),

  path: {
    task: require('./gulp/config/task.js')
  }
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});


$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:dev'),
  $.gulp.parallel('watch', 'servere')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build'),
  $.gulp.parallel('watch', 'servere')
));