/**
 * Gulp script for MOTW boilerplate project.
 */

var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    del         = require('del');

var deploy      = require('gulp-gh-pages');

gulp.task('clean', del.bind(null, [
  '.publish'
]));

gulp.task('tutorials', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'tutorials'
    },
    browser: 'google chrome'
  });

  gulp.watch([
    'tutorials/*.html',
    'tutorials/assets/*'
  ], browserSync.reload);
});

gulp.task('app', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
    browser: 'google chrome'
  });

  gulp.watch([
    'app/*.html',
    'app/assets/*.html',
    'app/assets/*.js',
    'app/assets/*.css'
  ], browserSync.reload);
});

gulp.task('deploy-tutorials', function () {
  return gulp.src('tutorials/**/*')
    .pipe(deploy());
});

gulp.task('deploy-app', function () {
  return gulp.src('app/**/*')
    .pipe(deploy());
});

gulp.task('default', function (cb) {
  runSequence('app', cb);
});