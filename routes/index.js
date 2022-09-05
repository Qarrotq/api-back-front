const {Router}=require ('express')//мы хотим получить часть экспресса
const router=Router()
const users=require('../middleware/users')

 router //обработчики по какому пути пошел пользователь
 .get('/all-users',users.allUsers) //получение
 .get('/user/:id',users.oneUser)
 .post('/create-user',users.createUser) //создание
 .put('/update-user/:id',users.updateUser) //изменить
 .delete('/delete-user/:id',users.deleteUser) //удалить
 //методов может быть бесконечное количество
 //все это миддлвейр все что тут будем прописывать в миддлвейр
 //по умолчанию 2гет 1 рут 1 пост 1 делит



module.exports=router 