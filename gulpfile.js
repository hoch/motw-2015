/**
 * Gulp script for MOTW boilerplate project.
 */

var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    del         = require('del');

var reload      = browserSync.reload;
var deploy      = require('gulp-gh-pages');

gulp.task('clean', del.bind(null, [
  '.publish',
  'app/**/*',
  '!app'
]));

gulp.task('build-style', function () {
  return gulp.src('src/css/*.css')
    .pipe(plugins.cssmin())
    .pipe(gulp.dest('app/css'))
    .pipe(plugins.size({ title: 'STYLES' }));
});

gulp.task('build-script', function () {
  return gulp.src('src/scripts/*.js')
    .pipe(plugins.uglify({ mangle: false }))
    .pipe(gulp.dest('app/scripts'))
    .pipe(plugins.size({ title: 'SCRIPTS' }));
});

gulp.task('build-asset', function () {
  // TODO: add image optimization.
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('app/assets'))
    .pipe(plugins.size({ title: 'ASSETS' }));
});

gulp.task('build-html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('app'))
    .pipe(plugins.size({ title: 'HTML' }));
});

gulp.task('build-component', function () {
  // TODO: add vulcanization.
  return gulp.src('src/bower_components/**/*')
    .pipe(gulp.dest('app/bower_components'))
    .pipe(plugins.size({ title: 'COMPONENTS' }));
});

gulp.task('build', function (cb) {
  runSequence('clean', 
    ['build-style', 'build-script', 'build-asset', 'build-html', 'build-component'], cb);
});

gulp.task('dev', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    },
    browser: 'google chrome'
  });

  gulp.watch([
    'src/*.html',
    'src/scripts/*.js',
    'src/css/*.css'
  ], reload);
});

gulp.task('preview', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
    browser: 'google chrome'
  });
});

gulp.task('deploy', function () {
  return gulp.src('app/**/*')
    .pipe(deploy());
});

gulp.task('default', function (cb) {
  runSequence('build', 'preview', cb);
});