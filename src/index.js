const confirmEnding=(str, ending)=>
{
    let begin =ending.length;
    let result=false;

   if(str.slice(-begin)===ending) return result=true;
   return result
};



module.exports= {confirmEnding};