
const User=require('../model/User')

const Login=(req,res)=>{
const {email,password}=req
//emal ile sorgula boyle bı emaıl var mı?
//o emaıle sahıp kullanıcının sıfresını al
//karsılastır
//dogru ıse jwt ver yanlıs ıse hata ver

}


const Register=async(req,res)=>{

    const {user}=req;

    if(user){
        try{
            const user_register=await User.save(user);
            res.status(200).json(user_register)
                } 
                catch(err){
            console.log(err);
                }   
             }

  
}  


const LogOut=async(req,res)=>{
//kullanıcının auth ıslemlerı
}