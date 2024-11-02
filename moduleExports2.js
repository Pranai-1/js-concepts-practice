function add(x,y){
    return x+y
}

function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}
module.exports=add//default export
module.exports = {
    add,
    multiply,
    divide
};

