



exports.getServerInfo= (req,res)=>{


    console.log("hi")
    console.log(req.query)

    res.send(`<h1>Hello Server on PORT : 9877</h1>`)
}

exports.getPersonalDetails = (req,res)=>{
    res.send({name : "user" , mobile : "b user"})

}

exports.getForm = (req,res)=>{
    res.send(`
    
          <form method="POST"  action="/result" >
                <input  placeholder="Enter any number" name="n1"  />
                 <input  placeholder="Enter another number" name="n2"  />
                 <button>Submit</button>
    
            </form>
        
        `)
    
}


exports.getResult = (req,res) =>{

    console.log(req.body)
  var x = parseInt(req.body.n1) +  parseInt(req.body.n2)

    res.send(String(x))
}