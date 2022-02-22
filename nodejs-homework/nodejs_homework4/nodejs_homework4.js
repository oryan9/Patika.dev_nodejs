const fs = require('fs');

fs.writeFile("example.json",{"name":"Employee 1 Name","salary": 2000},"utf8",(err,data)=>{
    if(err) console.log(err)
    console.log(data)
    console.log("New file created.")
})

/*fs.readFile("example.json","utf8",(err)=>{
    if(err) console.log(err)
    console.log("File read.")
})

/*fs.appendFile("example.json","asd",(err)=>{
    if(err) console.log(err)
    console.log("File updated.")
})

/*fs.unlink("employees.json",(err)=>{
    if(err) console.log(err)
    console.log("File deleted")
})*/