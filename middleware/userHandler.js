import HttpError from 'http-errors';

const validateUserEmail = (req, res, next)=>{
    console.log("---> usershandler:::::validateUser");

    if (!req.body.username)
        next(HttpError(400, { message: 'Ups! parametro de entrada incorrecto?' }));
    
        let emailValidation = String(req.body.username)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!emailValidation) 
        next(HttpError(400, { message: 'Error formato username' }));

    next();
}

export default {
    validateUserEmail
};