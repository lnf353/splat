// npm init
// npm install gulp
// export PATH=./node_modules/.bin:../node_modules/.bin:../../node_modules/bin:$PATH
var gulp = require('gulp'),
 sass = require('gulp-sass'),
  browserSync = require('browser-sync');

  gulp.task('ss', function() {
    return gulp.src('sass/**/import.scss') 
    .pipe(sass())
    .pipe(gulp.dest('css/style.css'))
    .pipe(browserSync.reload({stream: true})) 
  });

gulp.task('bs', function(){

  browserSync( { server: { baseDir: '' },
      notify: false
  });

});

gulp.task('default',['bs', 'ss'], function() {
  gulp.watch('sass/**/*.scss', ['ss']);

});


