/**
 * Gulp script for MOTW boilerplate project.
 */

var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    del         = require('del');

var deploy      = require('gulp-gh-pages');

/**
 * clean
 * : Cleans the temporary directory for publishing.
 */
gulp.task('clean', del.bind(null, [
  '.publish'
]));

/**
 * tutorial
 * : Starts the server out of the tutorial directory.
 */
gulp.task('tutorial', function () {
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

/**
 * app
 * : Starts the server out of the application directory.
 */
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

/**
 * deploy-tutorial
 * : Deploy the tutorial directory to the associated GitHub gh-pages branch.
 */
gulp.task('deploy-tutorial', function () {
  return gulp.src('tutorials/**/*')
    .pipe(deploy());
});

/**
 * deploy-app
 * : Deploy the application directory to the associated GitHub gh-pages branch.
 */
gulp.task('deploy-app', function () {
  return gulp.src('app/**/*')
    .pipe(deploy());
});

/**
 * default
 * : Launch the server with the application.
 */
gulp.task('default', function (cb) {
  runSequence('app', cb);
});