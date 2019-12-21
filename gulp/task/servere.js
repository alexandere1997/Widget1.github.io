module.exports = function () {
  $.gulp.task('servere', function() {
    $.bs.init({
        server: {
            baseDir: "./build"
        }
    });
  });
}