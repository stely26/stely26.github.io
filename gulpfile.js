//Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');   //壓縮css文件
const plumber = require("gulp-plumber");//把程式錯誤改回來後，繼續做監看的動作


//css task
function css() {
  return gulp.src('sass/*.scss')
  .pipe(plumber())
  .pipe(sass())  
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css'))
  .pipe(browsersync.stream());
}

// BrowserSync
 function browserSync(done) {
   browsersync.init({
     server:'./'    
   });
   done();
 }

 // BrowserSync Reload
 function browserSyncReload(done) {
   browsersync.reload();
   done();
 }


// Watch files
function watchFiles() {
  gulp.watch('sass/*.scss').on('change', css);  
  gulp.watch("*.html").on('change', browsersync.reload); 
}


// define complex tasks 定義複雜的任務
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles, browserSync);



// export tasks  出口任務
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;

