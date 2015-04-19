var gulp = require('gulp')
// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var open = require('gulp-open');

var config = {
    bowerDir: './bower_components'
}

// Components tasks
// jquery
gulp.task('componentJquery',function(){
	/*return gulp.src(config.bowerDir + '/jquery-2.1.0.min/index.js', {base: config.bowerDir})
		.pipe(gulp.dest('./assets/js/vendor'));	*/
});
// bootstrap
gulp.task('componentBootstrap', function () {
	return gulp.src(config.bowerDir + '/bootstrap/dist/*', {base: config.bowerDir + '/bootstrap/dist'})
		.pipe(gulp.dest('./assets/js/vendor/bootstrap'));
});
// font awesome
gulp.task('componentFA', function() {
	return gulp.src(config.bowerDir + '/font-awesome')
		.pipe(gulp.dest('./assets/css/font-awesome'));
});
gulp.task('componentFA', function() {
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
		.pipe(gulp.dest('./assets/css/font-awesome/fonts'));
});
gulp.task('componentBS', function() {
	return gulp.src(config.bowerDir + '/bootstrap/dist/fonts')
		.pipe(gulp.dest('./assets/css/fonts'));
});
// swiper
gulp.task('componentSwiper', function() {
	return gulp.src(config.bowerDir + '/swiper/dist')
		.pipe(gulp.dest('./assets/js/vendor/swiper'));
});
// template7
gulp.task('componentTemplate7', function() {
	return gulp.src(config.bowerDir + '/knockout/dist')
		.pipe(gulp.dest('./assets/js/vendor/knockout'));
});
// knockout
gulp.task('componentKnockout', function() {
	return gulp.src(config.bowerDir + '/template7/dist')
		.pipe(gulp.dest('./assets/js/vendor/template7'));
});
// watch
gulp.task('componentWatch', function() {
	return gulp.src(config.bowerDir + '/watch/src')
		.pipe(gulp.dest('./assets/js/vendor/watch'));
});
// watch
gulp.task('componentModernizr', function() {
	return gulp.src(config.bowerDir + '/modernizr/modernizr.js')
		.pipe(gulp.dest('./assets/js/vendor/modernizr'));
});

gulp.task('clean', function(){
  return gulp.src(['assets/js/vendor/*'], {read:false})
  .pipe(clean());
});

var Movej = [
        config.bowerDir + '/jquery/dist/*.js',
        config.bowerDir + '/bootstrap/dist/js/*.js',
		config.bowerDir + '/knockout.js/dist/*.js',
		config.bowerDir + '/swiper/dist/js/*.js',
		config.bowerDir + '/template7/dist/*.js',
		config.bowerDir + '/watch/src/*.js',
		config.bowerDir + '/modernizr/*.js'
    ];

var Movec = [
        config.bowerDir + '/bootstrap/dist/css/*.css',
		config.bowerDir + '/font-awesome/css/*.css',
		config.bowerDir + '/swiper/dist/css/*.css'
    ];

gulp.task('MoveCSS', function(){
  return gulp.src(Movec,{base:config.bowerDir})
	  .pipe(gulp.dest('assets/css'));
});

gulp.task('MoveJS', function(){
  return gulp.src(Movej,{base:config.bowerDir})
	  .pipe(gulp.dest('./assets/js'));
});

/*
gulp.task('move2', function(){
  return gulp.src(['assets/*.js'],{base:'./'})
	  .pipe(gulp.dest('assets/js'));
});
*/
gulp.task('clean2',function(){
  return gulp.src(['assets/js/vendor'], {base:'./', read:false})
  .pipe(clean({force: true}));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src(['assets/js/pages.model.js','assets/js/navigationStack.jquery.js','assets/js/app.js','assets/views/home/home.js'])
		.pipe(concat('build.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});	

// Concatenate & Minify CSS
gulp.task('styles', function() {
	return gulp.src(['assets/css/app.css','assets/inc/views/home/home.css'])
		.pipe(concat('build.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('run', function(){
  	return gulp.src('./index.html')
  		.pipe(open('<%file.path%>'));
});	

gulp.task('watch', function() {
    gulp.watch(['assets/**/*.js','assets/**/*.css'], ['styles', 'scripts']);
});

gulp.task('default', ['componentJquery', 'watch', 'scripts', 'styles', 'componentBootstrap', 'componentFA', 'componentSwiper', 'componentTemplate7', 'componentKnockout', 'componentWatch', 'componentModernizr', 'componentBS', 'MoveCSS', 'MoveJS', 'clean2']); 

