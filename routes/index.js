var express= require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");
var connectEnsureLogin = require("connect-ensure-login");

//root route
router.get("/", function(req, res){
    res.render("home");
});

//register form 
router.get("/register", function(req, res){
    res.render("register");
});

//register logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            // console.log(err.message);
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome " + user.username);
            res.redirect("/campgrounds");  
        });
        
    });
});

//show login form
router.get("/login", function(req, res){
    res.render("login");
});


//login logic

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      var redirectTo;
      if (req.session.redirectTo) {
          redirectTo = req.session.redirectTo;
      } else {
          req.flash("success", "Welcome back " + user.username);
          redirectTo = '/campgrounds';  
      }
      delete req.session.redirectTo;
      res.redirect(redirectTo);
    });
  })(req, res, next);
});
        
    


// router.post("/login", function(req, res,next){
//     passport.authenticate("local",{
//     successReturnToOrRedirect: "/campgrounds",
//     failureRedirect: "/login",
//     successFlash: "Welcome back " + req.body.username + "!"
// })(req, res, next);
    
// });


//logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "successfully logged out!");
    res.redirect("/campgrounds");
});

module.exports = router;