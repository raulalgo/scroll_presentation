var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['styles'], function(){

  browserSync.init({
    server: "./"
  });

  gulp.watch("sass/**/*.scss",['styles']);
  gulp.watch("*.html", ['html']);
  gulp.watch("*.js", ['js']);
  //gulp.watch("*.html".on('change',browserSync.reload));
  //gulp.watch("*.js".on('change',browserSync.reload));
});

gulp.task('styles', function(){
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('html', function(){
  browserSync.reload();
});

gulp.task('js', function(){
  browserSync.reload();
});

gulp.task('default', ['serve']);
