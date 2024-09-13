const users = require('../users.json');
function getALLUser(req,res){
    try{
        res.json(users)
    }catch(err){

    }
}
module.exports={
    getALLUser,
}