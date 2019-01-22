module.exports = (app) => {
    // any request that starts with /api send here
    app.use('/api', require('./api'));
}