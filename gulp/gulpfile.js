//プラグインの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const glob = require("gulp-sass-glob");
const plumber  = require('gulp-plumber');
const changed  = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg  = require('imagemin-mozjpeg');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;

const webpackStream = require("webpack-stream");
const webpack = require("webpack");


// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

// 全ファイルパス
const paths = {
  rootDir: "../",
  scssSrc: "scss/**/*.scss",
  jsSrc: "js/**/*.js",
  imgSrc: "src/**/*",
  outCss: "../css",
  outJs: "../js",
  outImg: "../assets/",
};

// browser sync
function browserSyncFunc(done){
  browserSync.init({
    // server: {
    //   baseDir: paths.rootDir,
    //   middleware: [
    //     ssi({
    //       baseDir: paths.rootDir,
    //       notify: false, //通知
    //       ext: ".html"
    //     })
    //   ]
    // },
    proxy: "http://st-ballet.wrr/",
    files: [
      "../**/*.css",
      "../**/*.js",
      "../**/*.php",
    ],
    port: 4000,
    reloadOnRestart: true
  });
  done();
}


// sass
function sassFunc() {
  return gulp.src(paths.scssSrc , {
      sourcemaps: true
  })
  .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
  }))
  .pipe(glob())
  .pipe(sass({
    includePaths: require('node-reset-scss').includePath,
      outputStyle: 'compressed'
      // outputStyle: 'expanded'
  }))
  .pipe(gulp.dest(paths.outCss), {
      sourcemaps: './sourcemaps'
  })
  .pipe(gulp.dest(paths.outCss), {
      sourcemaps: './sourcemaps'
  })
  .pipe(browserSync.stream());
}


// js
function jsFunc() {
  return plumber({
    errorHandler: notify.onError('<%= error.message %>'),
  })
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(babel())
  .pipe(uglify({}))
  .pipe(gulp.dest(paths.outJs));
}


// img
function imgFunc() {
  return gulp.src(paths.imgSrc)
  .pipe(changed(paths.outImg))
  .pipe(gulp.dest(paths.outImg))
  .pipe(imagemin(
    [
      mozjpeg({
        quality: 80 //画像圧縮率
      }),
      pngquant()
    ],
    {
      verbose: true
    }
  ))
}



// watch
function watchFunc(done) {
  gulp.watch(paths.scssSrc, gulp.parallel(sassFunc));
  gulp.watch(paths.jsSrc, gulp.parallel(jsFunc));
  gulp.watch(paths.imgSrc, gulp.parallel(imgFunc));
  done();
}


// scripts tasks
gulp.task('default',
  gulp.parallel(
    browserSyncFunc, watchFunc
    // browserSyncFunc, watchFunc, sassFunc, jsFunc,imgFunc
  )
);


