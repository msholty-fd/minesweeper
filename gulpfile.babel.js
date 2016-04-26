import gulp from 'gulp';
import del from 'del';
import concat from 'gulp-concat';
import devServer from './dev-server';
import livereload from 'gulp-livereload';

function clean() {
    return del('dist');
}

function template() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'));
}

function compileCss() {
    return gulp.src('src/**/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build'))
        .pipe(livereload());
}

function watch() {
    gulp.watch('src/**/*.css', compileCss);
    gulp.watch('src/index.html', template);
}

livereload.listen();

gulp.task('dev', gulp.series(
    clean,
    gulp.parallel(template, compileCss),
    gulp.parallel(watch, devServer)
));
