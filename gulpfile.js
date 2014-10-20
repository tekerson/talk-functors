var gulp = require('gulp');
var bower = require('gulp-bower');
var pandoc = require('gulp-pandoc');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var slides = require('./src/slides');

var resources = 'src/resources/**/*';
var output = 'output/';

gulp.task('default', ['build']);

gulp.task('build', ['dependencies', 'resources', 'pandoc']);

gulp.task('clean', function (cb) {
  return gulp.src(output)
    .pipe(clean(cb));
});

gulp.task('dependencies', ['clean'], function () {
  return bower()
    .pipe(gulp.dest(output));
});

gulp.task('pandoc', ['clean'], function () {
  return gulp.src(slides)
    .pipe(concat('index.md'))
    .pipe(pandoc({
      from: 'markdown',
      to: 'revealjs',
      ext: '.html',
      args: ['--standalone',
        '--css=reveal.js/css/theme/solarized.css',
        //'--css=reveal.js/lib/css/zenburn.css',
        '--css=resources/custom.css',
        //'--variable=theme:solarized',
        '--slide-level=2',
      ]
    }))
    .pipe(gulp.dest(output));
});

gulp.task('resources', ['clean'], function () {
  return gulp.src(resources, {base: './src'})
    .pipe(gulp.dest(output));
});

gulp.task('watch', ['build'], function () {
  gulp.watch([slides, resources], ['build']);
});

