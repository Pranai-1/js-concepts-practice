

let timer;
let recommendations
const fetchData=function(e){
    let completed=false;
    clearTimeout(timer)
    let obj={
        data:e.target.value
    }
    let requestOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    }
    timer=setTimeout(()=>{
        fetch("http://localhost:4000/recommend",requestOptions)
        .then((response)=>{
            if(response)
            return response.json()
            else
            throw new Error("Error")
        }).then((data)=>{
            recommendations=data.arr
            console.log(data)
            performAppend()
        }).catch((error)=>{
            console.log(error)
        })
    },300)

   console.log(e.target.value)
}
function deleteChilds(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function performAppend(){
    const parent=document.querySelector(".add-recommended")
    deleteChilds(parent)
    console.log(recommendations)
    let count=0
    recommendations.map((rec)=>{
        count++;
        const div=document.createElement('div')
        const textNode=document.createTextNode(rec)
        div.setAttribute("class",`${count}`)
        div.appendChild(textNode)
        div.style.marginLeft="8px"
        parent.appendChild(div)
    })
}
const element=document.querySelector(".search-bar")
element.addEventListener("keyup",fetchData)


