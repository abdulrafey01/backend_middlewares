exports.urlCheck = (req, res, next)=>{
    let url = req.get('origin')
        if (url === 'http://localhost:3000') {
            next();
        } else {
            // res.redirect("/");
            res.send({
                msg: 'You are not authorized to access this page'
            });
        }
}