module.exports = {
    mode: 'production',
    entry: 'xml2js',
    resolve: {
        fallback: {
            stream: require.resolve('string_decoder/'),
            stream: require.resolve('buffer/'),
            timers: require.resolve('timers-browserify')
        }
    }
}
