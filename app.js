import express from 'express';
import moviesRouter from './routers/moviesRouter.js'
import usersRouter from './routers/usersRouter.js';
import clientErrorHandler from './middleware/errorHandler.js';
import errorRouter from './routers/errorRouter.js';

const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log('---->EX:app.js');
    next();
});

app.use('/movies',moviesRouter);
//Otros direccionaminetos ...
app.use('/users', usersRouter);
//fin otros direccionamientos 
app.use('*',errorRouter);
app.use(clientErrorHandler);


export default app;
