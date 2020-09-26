console.log("Mode: "+process.env.NODE_ENV)
module.exports = {
    devServer: {
        host: "localhost"
    },
    publicPath:
        process.env.NODE_ENV === 'development'
        ? '/'
        : '/mycourses-vue/' // use /mycourses-vue/dist if testing locally
}
