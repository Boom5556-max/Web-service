import express from "express"
const app = express()
const port = 3000



app.get('/',(req,res)=>{
    console.log(req.rawHeaders)
    res.send("Hello World!!")
})
app.get('/readparam',(req,res)=>{
    console.log("Get Request at /readparam")
    console.log(JSON.stringify(req.query));
    const name = req.query.name || 'ไม่ระบุชื่อ';
    const id = req.query.id || 'ไม่ระบุID';

    res.send("Hello"+name+":"+id+"<br>จาก ศุภกฤต สีกุม :6630200578")
})
app.get('/ip', (req, res) => {
    console.log("Get Request at /ip");

    res.send(`
        <h1>Lab2</h1>
        <p>ได้รับการร้องขอจาก IP: ${req.ip}</p>
    `);
});

app.listen(port,()=>{
    console.log('Server running on port ',+port);
})