const confirmEnding=(str, ending)=>
{
    let begin =ending.length;
    let result=false;

    str.slice(-begin)===ending
    &&
    (result=true)

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
};

const largestOfFour=(arr)=>
{
    return arr.map((subArr)=>{
        return Math.max.apply(null,subArr);
    });
};

module.exports= { confirmEnding, factorial, largestOfFour };