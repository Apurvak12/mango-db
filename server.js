const http =require('http');

const app=http.createServer((req,res)=> {

    console.log(req.method)
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(
        JSON.stringify({
            data: 'hello world!',
        })
    );
});

app.listen(3000,()=>{
    console.log('server is listing on port 3000');
});