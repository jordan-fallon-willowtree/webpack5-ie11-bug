module.exports = {
    mode: 'production',
    entry: 'stream',
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify')
        }
    }
}
