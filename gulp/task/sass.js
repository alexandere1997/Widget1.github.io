module.exports = function () {
  $.gulp.task('sass', function() {
    return $.gulp.src('src/static/sass/style.sass')
           .pipe($.gp.sourcemaps.init())
           .pipe($.gp.sass({}))
           .pipe($.gp.autoprefixer({
            cascade: false
           }))
           .on("error", $.gp.notify.onError({
            title: "style"
          }))
           .pipe($.gp.csso())
           .pipe($.gp.sourcemaps.write())
           .pipe($.gulp.dest('build/static/css/'))
           .pipe($.bs.reload({
             stream: true
           }))
  });
}