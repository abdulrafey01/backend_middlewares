const { exec } = require('child_process');


exports.tracertCommand = async (req,res,next)=>{

    
    const ipAddressWithPrefix = req.ip;
    const parts = ipAddressWithPrefix.split(':');
    const ipAddress = parts[parts.length - 1];

    console.log("Your Ip Address is: " + ipAddress)
     
    const cmdCommand = `tracert ${ipAddress}`;

    console.log("Wait...")

    exec(cmdCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      console.log(`Tracert Output:\n${stdout}`);
      console.log("Done ✔")
    });

    next()
}