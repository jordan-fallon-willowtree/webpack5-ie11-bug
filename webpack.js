module.exports = {
    mode: 'production',
    entry: 'sax',
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify')
        }
    }
}
