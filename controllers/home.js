/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    res.jsonp({
        message: 'Ми будем багаті'
    });
};
