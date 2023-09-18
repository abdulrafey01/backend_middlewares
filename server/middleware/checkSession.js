const namesArray = []

exports.checkSession = (req, res, next) => {

    const url = req.url

    if (url === '/signin') {

        const { userName } = req.body
        const userNameCount = namesArray.filter((name) => name === userName).length;

        if (userNameCount >= 3) {
            res.send({
                msg: 'Max Session Limit Reached'
            });
        } else {

            namesArray.push(userName)
            console.log(namesArray)
            next()
        }
    }
    else if (url === '/signout') {
        const { userName } = req.body;
        const index = namesArray.indexOf(userName);

        if (index !== -1) {
            namesArray.splice(index, 1);
            next();
            console.log(namesArray)
        }
        else{
            res.send({
                msg: 'User Doenst Exist'
            });
        }

    }
}
