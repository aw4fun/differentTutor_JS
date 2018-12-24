const gulp = require("gulp");
const concat = require ("gulp-concat");
const autoprefixer = require ("gulp-autoprefixer");
const scss = require("gulp-sass");
const browserSync = require("browser-sync");



function toCSS() {
    return gulp.src("./src/scss/**/*.scss") // from
            .pipe(scss())
            .pipe(concat("./main.css")) // merge files to main_p1.css
            .pipe(autoprefixer({ // make auto prefix
                browsers: ['> 0.1%'],
                cascade: false
            }))
            .pipe(gulp.dest("./build/css")) // where
            .pipe(browserSync.stream());
}

function toJS() {
    return gulp.src("./src/index.js")
        .pipe(gulp.dest("./build/js"))
        .pipe(browserSync.stream());
}


function toHTML() {
    return gulp.src("./index.html")
        .pipe(gulp.dest("./build/"))
        .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        // tunnel: true // outside link
    });
    gulp.watch("./src/scss/**/*.scss", toCSS);
    gulp.watch("./src/*.js", toJS);
    gulp.watch("./index.html", toHTML);
}

gulp.task("watch", watch);
gulp.task("build", gulp.series( toHTML, toCSS, toJS));
gulp.task("dev", gulp.series("build", "watch"));
