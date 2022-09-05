const upload=require('../routes/upload')
let users=[]

// { id,
//     name,
//     age,
//     phone,
//     email,
//     address,
// } наша моделька

const getAllUsers=(req,res)=>res.status(200).json(users)
const getOneUser=(req,res)=>{
    const {id}=req.params
    

    const user=users.find((el)=>el.id == id)
    if(!user) res.status(404).json({message:'user not found'})

    res.status(200).json(user)
}

const createUser=(req,res)=>{
    upload(req,res,(err)=>{
    const {body}=req
    let fullPath=req.file.filename
    if(!body?.name) res.status(400).json({message:'name is required'})

    if (body.name){
    const user={
        id: users.length>0 ? users[users.length -1].id +1 : 1,
        ...body, //спред-оператор 
        fullPath:fullPath || "",
    }


    users.push(user)
    res.status(200).json(user)
}
})
}

const updateUser=(req,res)=>{
    const {id}=req.params
    const {body}=req
    if(!body?.name) res.status(400).json({message:'name is required'})

    users.forEach((el)=>{
        
        if(el.id==id){
            for (key in body){
            el[key]=body[key]
        }
    }
    })
    res.status(201).json({message:'Updated success!!!'})
}

const deleteUser=(req,res)=>{
    const {id}=req.params
    users=users.filter(el=>el.id !=id)
    res.status(200).json({message:'Deleted success!!!'})
}

module.exports={
    allUsers:getAllUsers,
    oneUser:getOneUser,
    createUser,//если значение и ключ совпадают можно вызвать без ключа
    updateUser,
    deleteUser,
}

