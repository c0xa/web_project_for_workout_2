const {series, parallel, src, dest} = require("gulp");

const gulp = require("gulp"),
	svgmin = require("gulp-svgmin"),
	svgstore = require("gulp-svgstore"),
	rename = require("gulp-rename"),
	inject = require("gulp-inject"),
	less = require("gulp-less"),
	autoprefixer = require("gulp-autoprefixer"),
	replace = require("gulp-replace"),
	browserSync = require("browser-sync").create(),
	mergeStream = require("merge-stream"),
	concat = require('gulp-concat');
const {copyCLIIgnoreToWatchOptions} = require("browser-sync/dist/cli/transforms/copyCLIIgnoreToWatchOptions");
	

gulp.task("svgstore", function () {
	const svgs = gulp
		.src("./src/assets/icons/**/*.svg")
		.pipe(
			svgmin(function () {
				return {
					plugins: [
						{
							removeTitle: true,
						},
						{
							removeStyleElement: true,
						},
					],
				};
			})
		)
		.pipe(rename({prefix: "icon-"}))
		.pipe(svgstore({inlineSvg: true}));

	function fileContents(filePath, file) {
		return file.contents.toString();
	}

	return mergeStream(
		gulp
			.src("./front/index.html")
			.pipe(inject(svgs, {transform: fileContents}))
			.pipe(gulp.dest("./dist")));


});

gulp.task("icons", function () {
	return gulp.src("./front/icons/**")
		.pipe(dest("./dist/icons/"))
})


gulp.task("image", function () {
	return gulp.src("./front/images/**")
		.pipe(dest("./dist/images/"))
})

gulp.task("html", function () {
	return gulp
		.src("./front/index.html")
		.pipe(gulp.dest("./dist"))
});

gulp.task("less", function () {
	return src("./front/assets/styles/main.less")
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
        './front/src/components/component/component.js',
		'./front/src/components/visited_workspace/visited_workspace.js',
        './front/src/modules/deserialize/deserialize.js',
        './front/src/modules/serialize/serialize.js',
		'./front/src/components/window/window.js',
		'./front/src/components/switch_theme/switch_theme.js',
		'./front/src/components/form_registration/form_registration.js',
        './front/src/components/office/office.js',
		'./front/src/components/row_office/row_office.js',
		'./front/src/components/column_office/column_office.js',
		'./front/src/components/card_information/card_information.js',
		'./front/src/components/user/user.js',
		'./front/src/components/accounts/accounts.js',
		'./front/src/components/form_authentication/form_authentication.js',
		'./front/src/modules/animator/animator.js',
		'./front/src/modules/event/event.js',
		'./front/src/modules/bgscroll/bgscroll.js',
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
	gulp.watch("./front/assets/styles/**/*.less").on("change", series("less"));
	gulp.watch("./front/src/**/*.js").on("change", series("scripts"));
	
	gulp.watch("./dist/index.html").on("change", browserSync.reload);
	gulp.watch("./dist/style.css").on("change", browserSync.reload);
	gulp.watch("./dist/main.js").on("change", browserSync.reload);
});

gulp.task("build", series("svgstore", "less", "html", "scripts", "image", "icons"));

gulp.task("default", series(parallel("svgstore", "less", "html", "scripts", "image", "icons"), "serve"));

exports.build = series("svgstore", "less", "html", "scripts", "image", "icons");