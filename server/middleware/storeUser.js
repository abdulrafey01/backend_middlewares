const arp = require('@network-utils/arp-lookup');
const userInfo = []

exports.storeUser = async(req,res,next)=>{

    const { userName } = req.body
    
    const parsedURL = new URL(req.get('origin'));

    const ipAddressWithPrefix = req.ip;
    const parts = ipAddressWithPrefix.split(':');
    const ipAddress = parts[parts.length - 1];
    const mac = await arp.toMAC(ipAddress)

    // var geo = geoip.lookup("58.65.220.173");

    console.log(ipAddress)
    // console.log(mac)
    // console.log(geo)

    const newUser = {
        userName,
        ipAddress,
        mac
    }

    userInfo.push(newUser)
    console.log(newUser)
    res.send(req.ip)

}