function squareSum(numbers){
    const squared=[];
    let total=0;
    for(let number of numbers){
      squared.push(number*2)
        console.log(squared)
      for(let num of squared){
          
        total+=num
          console.log(total)
      }
    }
    return total;
  }

  squareSum([1,2,3])