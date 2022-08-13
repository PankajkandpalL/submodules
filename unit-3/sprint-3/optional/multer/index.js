const express = require("express")
const app = express()
const multer = require('multer')
const fs = require('fs')
const cors = require("cors")
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send('Welcome to Imgur Lite Backend')
})

const storageEngine = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, `${__dirname}/uploads`)
    },
    filename : (req,file,cb) =>{
        cb( null, file.originalname )
    }
})

const upload = multer({ storage : storageEngine })

app.post("/upload", upload.single('image'), (req,res)=>{
    
    let image = fs.readFileSync(`${req.file.path}`, 'base64')
    // fs.unlinkSync(`${req.file.path}`, (err)=>{
    //     if(err) throw err
    //     else console.log('Deleted')
    // })
    res.send(image)

})

app.post("/multiple", upload.array('images', 4), (req,res)=>{
    let arr = []
    let tc = req.files.length
    for(var i=0;i<tc;i++)
    {
        let url = fs.readFileSync(`${req.files[i].path}`, 'base64')
        arr.push(url)
        fs.unlinkSync(`${req.files[i].path}`, (err)=>{
            if(err) throw err
            else console.log('Deleted')
        })
    }
    res.send(arr)
})

let PORT = process.env.PORT || 8080
 
app.listen(PORT, ()=>{

    console.log(`Server running on http://localhost:${PORT}`)

})