module.exports.profile = function(req,res){
    return res.render('profile',{title:"Profile"});
}

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{title:"Sign Up"});
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{title:"Sign In"});
}


//get the sign up data
module.exports.create=function(req,res){
    
}


//sign in and create a session
module.exports.createSession = function(req,res){

}

