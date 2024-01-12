 
// for authentication we  nedd local STRATGY//
   const LocalStrategy=require("passport-local").Strategy;
   const bcrypt=require("bcrypt");
   function initialize(passport,getUserByEmail,getUserById){
     // authenticate users//
       const authenticateUsers=async(email,password,done) =>{
             //get user by email//
             const user=getUserByEmail(email)
             if(user==null){
              return(done,null,false,{message:"no user found with this mail"})
             }
            
             try{
               if(await bcrypt.compare(password,user.password)){
                return done(null,user)
               }
               else{
                return done(null,false,{message:"Password Incorrect"})
               }
             }
             catch(e){
                console.log(e)
                return done(e)
             }
       }
       passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers));
       passport.serializeUser((user, done) => done(null, user.id))
            passport.deserializeUser((id, done) => {
                return done(null, getUserById(id))
           })
   }
   module.exports=initialize