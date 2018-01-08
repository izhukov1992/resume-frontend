var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('node_modules/startbootstrap-resume/vendor/**/*')
    .pipe(gulp.dest('vendor'))

  gulp.src('node_modules/startbootstrap-resume/js/**/*')
    .pipe(gulp.dest('assets/js'))

  gulp.src('node_modules/startbootstrap-resume/css/**/*')
    .pipe(gulp.dest('assets/css'))

  gulp.src('node_modules/startbootstrap-resume/img/**/*')
    .pipe(gulp.dest('assets/img'))
});

gulp.task('default', ['copy']);
