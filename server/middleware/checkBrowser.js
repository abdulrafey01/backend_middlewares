const uaParser = require("ua-parser-js")

exports.checkBrowser = (req, res, next) => {
    let userAgent = uaParser(req.headers['user-agent'])
    console.log(userAgent.browser)
    next()
}