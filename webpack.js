module.exports = {
    mode: 'production',
    entry: 'readable-stream',
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
        }
    }
}
