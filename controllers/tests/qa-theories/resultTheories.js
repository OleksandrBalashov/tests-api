const { Theory } = require("../../../model");
const { getTests } = require("../../../utils");

const resultTheories = async (req, res, next) => {
  const { body } = req;

  const allTests = await getTests(Theory);  

  const result=allTests.filter(({_id, rightAnswer})=>{
    const stringId=String(_id);
    for(let i=0; i<body.length; i++ ){
      if(stringId===body[i].id&&rightAnswer===body[i].answer){
        return body[i].answer
      }
    }
  })
  const feedback=result.length


  res.json({
    status: "success",
    code: 200,
    data: {
      feedback
    },
  });
};

module.exports = resultTheories;


// const result=answers.filter((id)=>{
//   for(let i=0; i<rightAnswers.length; i++){
//     if(rightAnswers[i]===id){
//       return rightAnswers[i]
//     }
//   }
// });