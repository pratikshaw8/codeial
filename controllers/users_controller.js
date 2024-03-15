const User = require('../models/user');

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{title:"Sign Up"});
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{title:"Sign In"});
}

module.exports.profile = (req,res)=> {
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id)
        .then(user=>{
            if(user)
                return res.render('profile',{title:"Profile Page",user : user});
            else
                return res.redirect('/users/sign-in');
        })
        .catch(err=>{
            console.log("Error in finding user",err);
        })
        
    }
    else{
        return res.redirect('/users/sign-in');
    }

}


//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return User.create(req.body);
        } else {
            return Promise.reject("User already exists");
        }
    })
    .then(() => {
        console.log("User created successfully");
        return res.redirect('/users/sign-in');
    })
    .catch(err => {
        console.error("Error in signing up the user:", err);
        return res.redirect('back');
    });
}


//sign in and create a session
module.exports.createSession = function(req,res){
    
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user)
        {
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            //handle session creation
            res.cookie('user_id', user.id);
            req.session = req.body;
            return res.redirect('/users/profile');
        }
        else
            return res.redirect('back');
    })
    .catch(err=>{
        console.log("Error in  signing in the user",err);
        return;
    })
}


module.exports.signOut = function(req, res){
    res.clearCookie('user_id');
    return res.redirect('/users/sign-in');
}