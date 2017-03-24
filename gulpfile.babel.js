import gulp from 'gulp'
import fetcher from './lib/fetcher'

gulp.task('default', function() {
    console.log('gulp init')
    fetcher();
})
