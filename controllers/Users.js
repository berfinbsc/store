
const User=require('../model/User')

const Login=(req,res)=>{
const {email,password}=req.body
res.status(200).json({email,password})
console.log("login success")
console.log(email)
//emal ile sorgula boyle bı emaıl var mı?
//o emaıle sahıp kullanıcının sıfresını al
//karsılastır
//dogru ıse jwt ver yanlıs ıse hata ver

}


const Register=async(req,res)=>{




 try{
    console.log(req.body)
            const user_register=await User.create(req.body)
            res.status(200).json(user_register)
            console.log("register succes")
                } 
                catch(err){
            console.log(err);
            console.log("register failed")
            console.log(user_register)
                }   
             

  
}  


const LogOut=async(req,res)=>{
//kullanıcının auth ıslemlerı
}

module.exports={Login,LogOut,Register}