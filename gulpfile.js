var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

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

gulp.task("build", function(){
  return browserify({
    entries: ["./src/index.js"],
    extensions: [".js", ".jsx"]
  })
  .transform(babelify.configure({
    presets : ["es2015", "react"]
  }))
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./assets/js"));
});

gulp.task('default', ['copy', 'build']);
