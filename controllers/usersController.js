import HttpError from "http-errors";
import usersModel from '../models/usersModel.js';
import bcrypt from 'bcrypt';

const register = (req, res, next)=>{
    console.log("estamos en---> usersController.js::::::::createUser");
    if (!req.body)
        next(HttpError(400, { message: 'Ups! parametro de entrada incorrecto' }));

    try {
        usersModel.createUser(req.body);
        req.body.message= 'Usuari creat correctament';
        res.json(req.body);
    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}

const checkUser = (req, res, next)=>{
    console.log('usersController----getUser');
    const users = usersModel.getUsers();
    for(let x=0; x<users.length; x++){        
        if(users[x].username==req.body.username){
            next(HttpError(400, { message: 'Ups! Este email de usuario ya existe.' }))
        }
    }
    next();
}

const isDefined = (req, res, next)=>{
    console.log('usersController----getUser');
    const users = usersModel.getUsers();
    for(let x=0; x<users.length; x++){        
        if(users[x].username==req.body.username){
            next();
        }
    }
    next(HttpError(400, { message: 'Ups! Este email de usuario no existe.' }))
}

const login = (req, res, next)=>{
    try{
        let hashedPassword = usersModel.getPassword(req.body.username);
        if(bcrypt.compareSync(req.body.password, hashedPassword)){
            res.send({message:'Login Correcte!'});
        }else{
            res.send({message:'Login Incorrecte!'});
        }

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}


export default {
    register,
    checkUser,
    login,
    isDefined
};