const confirmEnding=(str, ending)=>
{
    let begin =ending.length;
    let result=false;

   if(str.slice(-begin)===ending) return result=true;
   return result
};

const factorial = (num)=>
{
    let result;
    num<0
    ?
    result=-1
    :
    num===0
    ?
    result=1
    :
    result=(num* factorial(num-1));

    return result;
} 

module.exports= {confirmEnding, factorial};