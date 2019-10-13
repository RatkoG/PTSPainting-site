const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//*Ova vaka raboti
gulp.task('copy', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// // gulp.task('sass:watch', function () {
// //   gulp.watch('./sass/**/*.scss', ['sass']);
// // });
// // WATCH & SERVE
// gulp.task('serve', ['sass'], function () {
//   browserSync.init({
//     server: './dist'
//   });
//   gulp.watch(['./scss/**/*.scss', ['sass']]);
//   gulp.watch(['dist/*.html']).on('change', browserSync.reload);
// });

// // DEFAULT
// gulp.task('default', ['serve']);

// watch & serve
gulp.task("serve", gulp.series(["sass"], function () {
  browserSync.init({
    browser: "firefox developer edition",
    server: "./dist"
  });

  gulp.watch(["./scss/**/*.scss"], gulp.series(["sass"]));
  gulp.watch(["dist/*.html"]).on("change", browserSync.reload);
}));

// default task
gulp.task("default", gulp.series(["serve"]));