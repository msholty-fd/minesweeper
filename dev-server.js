import webpack from 'webpack';
import express from 'express';
import webpackConfig from './webpack.config.babel';
import path from 'path';

export default function devServer() {
    const app = express();
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    }));

    app.use(require('webpack-hot-middleware')(compiler, { reload: true }));

    app.use(express.static('build'));

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    app.listen(3000, 'localhost', function(err) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Listening at http://localhost:3000');
    });
}
