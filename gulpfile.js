var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("build", function() {
    gulp.src(["src/polyfills/web-animations.min.js", "src/smooth-scrolling.js"])
        .pipe(concat("smooth-scrolling.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});