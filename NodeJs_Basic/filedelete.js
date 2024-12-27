const fs = require('fs');

fs.unlink('calc1.js', (err)=>{

    if(err) throw err;

    console.log("File deleted successfully");

})