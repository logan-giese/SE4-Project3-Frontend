console.log("Mode: "+process.env.NODE_ENV)
module.exports = {
    devServer: {
        host: "localhost"
    },
    publicPath:
        process.env.NODE_ENV === 'development'
        ? '/'
        : '/degreeplan/' // use /degreeplan/dist if testing build locally
}
