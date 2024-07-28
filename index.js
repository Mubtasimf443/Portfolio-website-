/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */ 


const require = createRequire(import.meta.url) 
import express from 'express' ;
import cors from 'cors'
import ejs from 'ejs'
import { createRequire } from 'module'
import path from 'path'
import {fileURLToPath} from "url";


//variables
require('dotenv').config() ;
const app = express() ;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//midlewares
app.set('view engine', 'ejs') 
app.use(cors({
    origin:'*'
}))

 ;
app.set("views", path.join(__dirname, "/views") )



app.get('/file/img/:id' , (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname , './public/assets/' + req.params.id))
})



app.get('/file/css/:id' , (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname , './public/css/' + req.params.id))
})






app.get('/file/js/:id' , (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname , './public/js/' + req.params.id))
})





app.get('*' , (req,res) => {
    res.render('porfolio')
})







app.listen(process.env.port , () => {
 console.log('SubhanAllah');
})

