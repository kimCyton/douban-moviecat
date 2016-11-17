'use strict';

var gulp = require("gulp");

//启动服务器
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
	// root: 'dist', //当前项目主目录
	livereload:true	//同步
  });
});
 
gulp.task('html', function () {
  gulp.src('app/index.html')
    .pipe(connect.reload());
});
gulp.task('htmlHash', function () {
  gulp.src('**/**/*.html')
    .pipe(connect.reload());
});


 
gulp.task('watch', function () {
  gulp.watch('app/index.html', ['html']); 
  gulp.watch('**/**/*.html', ['htmlHash']);

  gulp.watch('src/index.html', ['copy']);
});
 
gulp.task('server', ['connect', 'watch']);