//sum(1)(2)(3)(4)....()=?
//This function will return a final output whenever there is an empty parameter 
//This function will return another function if there are any parameters

let sum=function(a){
    return function(b){
        if(b)
        return sum(a+b)
       return a
    }
}

console.log(sum(1)(2)(3)(4)(5)())