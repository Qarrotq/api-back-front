const express=require('express')
const bodyParser=require('body-parser')//для json
const PORT=3000
const app=express()
const cors=require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use('/',require('./routes/index'))
app.set('/static',express.static('public'))

const start=()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server started on port ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}
start()