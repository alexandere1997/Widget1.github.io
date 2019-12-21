module.exports = function () {
  $.gulp.task('img:dev', function() {
    return $.gulp.src('src/pug/static/img/*.{png, img, gif}')
    .pipe($.gulp.dest('build/static/img/'));
  });

  $.gulp.task('img:build', function() {
    return $.gulp.src('src/pug/static/img/*.{png, img, gif}')
    .pipe($.gp.tinypng('N7Cpf6xnBFLqXLssgM3lBk59y40hqkQw'))
    .pipe($.gulp.dest('build/static/img/'));
  });
}
