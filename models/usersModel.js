import user from '../data/user.js';

class UsersModel{
    
    createUser(body){    
        console.log("---> usersModel::createUser");
        user.push(body);
        console.log("User created"+body.username + body.password);
    }

    getUsers(){
        console.log("---> usersModel::getUsers");
        return user;
    }

    getPassword(userIn){
        let match = user.find(x=> x.username == userIn);
        return match.password;
    }
}

export default new UsersModel();