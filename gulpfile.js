const gulp = require("gulp");
const webser = require("gulp-webserver");
gulp.task("server", () => {
    gulp.src("./web")
        .pipe(webser({
            port: 8000,
            livereload: true,
            open: true,
            proxies: [
                { source: "/getlist", target: "http://localhost:3000/getlist" }
            ]
        }))

})
gulp.task("default", gulp.parallel("server"))