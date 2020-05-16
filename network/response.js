exports.success = function (req, res, info, status = 200, body) {
    res.status(status)
        .send({
            info,
            body
        });
}

exports.error = function (req, res, error, status = 500, details) { // TODO FIX: if status is emty and details added it crashes the app. Fix this!
    console.error('[Error while '+req.method+' @ '+req.originalUrl+']: ', details); // for security reasons, internally logs the error but does not serve it as a response
    res.status(status)
        .send({
            error
        });
}