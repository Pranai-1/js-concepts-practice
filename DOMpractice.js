document.getElementById("text").innerHTML="<h1>I replaced the p element</h1>"
document.getElementById("signal").innerHTML="I replaced the text"
const div=  document.getElementById("third")
div.getAttribute("class")//input
 div.setAttribute("class","input-elements test")
  console.log(div.getAttribute("class"))//input-elements test
 
div.style.background="red"
  div.style.padding="10px"
 div.style.borderRadius="10px"

 console.log(div.innerHTML)//will give all the html as well
//  <input type="text" id="text1" data-uppercase="capital" onkeyup="keyup()">
    // <input type="text" id="myInput" data-lowercase="small">
    // <input type="text" id="getText" placeholder="show text">
    // <input type="text" id="getText2" placeholder="show text"></input>
    console.log(document.getElementById("signal").innerText)//inner text will show the visible text but textContent will show the
    //text that has been hidden but present in DOM

   const htmlCollection=document.getElementsByClassName("second")//This will give a html collection not an array
   console.log(htmlCollection)
   const arr=Array.from(htmlCollection)//converting html collection into array
   console.log(arr)

   //Query selector:-These are same like selectors in css
   const x=document.querySelector(".second")//it will select an element with class name as second
   x.style.background="green"
   console.log(x)
//for id use # and for element we can access directly
   const nodeList=document.querySelectorAll(".btn")
   console.log(nodeList)
   nodeList.forEach((n)=>n.style.color="red")//nodelist and htmlcollection both have access to foreach method.no map method access

   const tasks=["wakeup","freshup","break fast","go to work"]

   //Adding tasks inside task class dev

   const taskDiv=document.querySelector(".tasks")
   let count=0;
   tasks.map((task)=>{
    count++;
    const taskItem = document.createElement('p');
    // taskItem.className="new"//one of the way
    taskItem.setAttribute("class",`task${count}`)
    //taskItem.innerText=task//one of the way but more costly approach
    const taskText = document.createTextNode(task);// Create a text node for the task name
    // Append the text node to the task item
    taskItem.appendChild(taskText);
    taskDiv.appendChild(taskItem)
   })

console.log(taskDiv.children)

   //deleting tasks
  let deleteTask= document.querySelector(".task4")
  console.log(deleteTask.parentElement)//div.tasks
  deleteTask.remove()

  //editing tasks

  let editTask=document.querySelector(".task3")
  const taskToReplace = document.createElement('p');
  let textToReplace=document.createTextNode("Eating")
  taskToReplace.appendChild(textToReplace);
  editTask.replaceWith(taskToReplace)

  //Removing using eventlisteners
  taskDiv.addEventListener("click",function(e){
   if(e.target.tagName=="P")
   e.target.remove()
  })