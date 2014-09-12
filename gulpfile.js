/* global require */

var path = require("path");

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("dev-server", function() {
  var compiler = webpack(webpackConfig);
  new WebpackDevServer(compiler, {
        // server and middleware options
        publicPath: "/assets/"
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/src/index.html");

        // keep the server alive or continue?
        // callback();
    });
});
