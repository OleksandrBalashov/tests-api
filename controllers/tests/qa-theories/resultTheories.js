const resultTheories = (req, res, next) => {
  const { body } = req;
  const {token}=
  res.json({
      status:"success",
      code:200,
      data:{
          
      }
  })

  
  console.log(body);
};

module.exports = resultTheories;
