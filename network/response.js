exports.success = function (req, res, message, status = 200) {
    res.status(status)
        .send({
            error:'',
            body : {
                message
            }
        });
}

exports.error = function (req, res, error, status = 500, details) { // TODO FIX: if status is emty and details added it crashes the app. Fix this!
    console.error('[Error while req to '+req.originalUrl+']: ', details); // for security reasons, internally logs the error but does not serve it as a response
    res.status(status)
        .send({
            error
        });
}