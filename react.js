const root=ReactDOM.createRoot(document.getElementById("react"))//ReactDom is responsible for all dom operations
//be careful while creating root because,react will override all the elements which are present in that root with the element
//you give in root.render() function

const heading1=React.createElement(
    "h1",
    {
        id:"title1",
        className:"react-ele1",
        style:{
            color:"red"
        }
    },
    "Created by react"
    )
const heading=React.createElement(
    "h1",
    {
        id:"title2",
        className:"react-ele2",
        style:{
            color:"black"
        }
    },
    "second child of same div"
    )

    const div=React.createElement(
    "div",
    {
        id:"title-div",
        className:"react-div",
        style:{
            background:"white",
            padding:"10px",
            margin:"10px",
        }
    },[heading,heading1]//rendering multiple childs in a div
    )
    
console.log(div)//react element is a plain java script object

root.render(div)//render method will override the root element with this element 

//npm is used to manage all the packages,our react cannot be built by just injecting react.
//^ is this caret and ~ this is tilda,we use these in front of versions because if there are any updates to those versions in 
//future,they will get updated.auto upgarding of version nothing else.

//we define our dependencies in package.json,they will auto upgrade if we use caret or tilda but to lock the versions for 
//production,we need to lock the packages,these locked packages are present in package lock.json
//never put packagelock file in gitignore

//node modules is kind of a data base for out npm,all our packages will get stored in node modules