const {Test} = require("../../../model")

const getQa=async(req,res,next)=>{
    try {
        const result=await tests.find();
        return res.json({
            status:"success",
            code:200,
            data:{
                result,
            }
        })
    } catch (error) {
        next(error)
    }
}


module.exports=getQa;

