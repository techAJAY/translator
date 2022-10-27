const translate = require('translate');

//translator api
 exports.trans = async (req,res)=>{
	try{

	const {text, translateTo} = req.body
	translate.engine = 'google';
	const translated_string = await translate(text, translateTo);
	console.log(translated_string);
    return res.status(201).send({message:"language translated successfully",data:translated_string})

	}catch(err){
      return res.status(500).send({status:false,message:err})
	}
    

}

