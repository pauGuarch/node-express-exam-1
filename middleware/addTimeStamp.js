

const addTimeStamp = (req, res, next)=>{
    req.body.registerdate = new Date().toLocaleString();
    next();
}

export default {addTimeStamp};
