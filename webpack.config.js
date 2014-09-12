var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: "/assets/",
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
};
