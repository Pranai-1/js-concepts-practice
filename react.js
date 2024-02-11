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

//React is fast because,it has a virtula dom and it uses bundlers for production.bundlers are parcel,vite,web pack etc..
//these bundlers takes care of:-
//HMR-Hot module replacement
//caching while development
//compatibility with older versions
//compression,Image optimization,super fast build algorithm

//npx meaning executing that particular project

//Transitive Dependency:-Transitive dependencies refer to dependencies that are required by other dependencies in a project. 
// In other words, when you have a dependency A that depends on another dependency B, 
// then B becomes a transitive dependency of your project.

//when we are building production ready application,it needs to have alot of dependencies to perform taksk like bundling,
//minification, caching and so many other things.These dependencies are also dependent on other dependencies.These are 
//called transitive dependencies

//we use npm run dev,it creates aserver along with it with the help of the dependencies,it minifies,it enables HMR and alot.

// <script type="module" src="/src/main.jsx"></script>

// In the provided script tag, specifying type="module" ensures that the browser treats the referenced script (main.jsx) as 
// an ECMAScript module. This allows the script to take advantage of the features provided by the module system, such as 
//encapsulation, asynchronous loading, and dependency management. It also enables the use of import and export statements 
//for importing and exporting functionality between modules. ECMAScript modules are a standard mechanism for organizing 
//and sharing code in JavaScript applications.

//npx create react app uses web pack along with babel
//tree shaking is done by bundlers which means removing unwanted code