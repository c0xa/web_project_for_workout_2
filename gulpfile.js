const {series, parallel, src, dest} = require("gulp");

const gulp = require("gulp"),
	rename = require("gulp-rename"),
    inject = require("gulp-inject"),
	less = require("gulp-less"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = require("browser-sync").create(),
	concat = require('gulp-concat');

gulp.task("html", function () {
	return gulp.src("./front/index.html").pipe(gulp.dest("./dist"))
});
	
gulp.task("less", function () {
	return src("./style/assets/styles/main.less")
		.pipe(less())
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
	.pipe(dest("./dist"));
});

gulp.task("scripts", function() {
	return src([
		'./front/src/store/store.js',
        './front/src/components/component/component.js',
        './front/src/components/office/office.js',
		'./front/src/main.js',
       
	]) 
   		.pipe(concat('main.js')) 
   		.pipe(dest('./dist'));
});

gulp.task("serve", function () {
	browserSync.init({
		server: {
			baseDir: "dist",
		},
	});

	gulp.watch("./front/index.html").on("change", series("html"));
	gulp.watch("./style/assets/styles/**/*.less").on("change", series("less"));
	gulp.watch("./front/src/**/*.js").on("change", series("scripts"));
	
	gulp.watch("./dist/index.html").on("change", browserSync.reload);
	gulp.watch("./dist/style.css").on("change", browserSync.reload);
	gulp.watch("./dist/main.js").on("change", browserSync.reload);
});

gulp.task("build", series("html", "less", "scripts"));

gulp.task("default", series(parallel("html", "less", "scripts"), "serve"));