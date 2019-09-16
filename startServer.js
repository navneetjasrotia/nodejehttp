var http=require('http');
http.createServer((req,res)=>
{
  console.log(req.url);
  if(req.url==='/user')
  {
  res.writeHead(200, {'Content-type':'application/json'});
  res.end("{'user':'navneet','phoneNumber':'8278734307'}");
  }
  else if(req.url==='/order')
  {
    res.writeHead(200, {'Content-type':'application/json'});
    res.end("{'orderNo':'123','orderName':'abc'}");
  }
  res.end('end');
}).listen(3000);
