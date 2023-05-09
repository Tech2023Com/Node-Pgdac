


exports.getAdminInfo=(req,res)=>{
    res.send("This is Admin")
}

exports.getPersonalDetails = (req,res)=>{
    res.send({name : "a" , mobile : "b"})

}