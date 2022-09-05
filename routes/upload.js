// multer для работы с файлами 
const multer= require("multer")
const path=require("path")
const storageEngine=multer.diskStorage({
    destination:'./public/files',//куда мы будем сохранять файл
    filename:(req,file,fn)=>{
        fn(
            null,
            `${new Date().getTime().toString()}-${file.fieldname}
            ${path.extname(file.originalname)}
            `
        )
    }
})




const upload=multer({
    storage:storageEngine, //куда мы будем сохранять
    limits:{fileSize:200000},//объем нашего файла
    fileFilter:(req,file,callback)=>{
        validateFile(file,callback)
    }

}).single('avatar') //one photo

const validateFile=(file,cb)=>{
    let allowedFileTypes= /jpeg|jpg|png/
    //принятые типы файдов
    const extencion=allowedFileTypes.toLocaleString(
        path.extname(file.originalname).toLocaleLowerCase()
    )
    const mimeType=allowedFileTypes.toLocaleString(file.mimeType)//оригинальный тип
    if(extencion && mimeType)
    {
        return cb(null,true)
    }else{
        cb('invalid file type.onle jpeg|jpg|png')
    }
}

module.exports=upload