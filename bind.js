let obj={
    name:"pranai",
    say:function(){
        console.log(`${this.name} clicked`)
    }
}

let binded=obj.say.bind(obj)//returns a binded function with the reference of the obj object
document.querySelector("button").addEventListener('click',binded );//only first button element will have event listener

document.querySelectorAll(".btn").forEach(function(button) {
    button.addEventListener('click', function() {
        console.log("Button with class 'btn' clicked!");
    });
});

document.getElementById("time").addEventListener('click', obj.say.bind(obj));//binding the function with the reference

