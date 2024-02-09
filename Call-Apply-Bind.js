    let greet={
        sayHello:function(age){
            console.log(`${this.name} ${age} Hello`)
        }
    }

    let obj={
        name:"pranai"
    }
    let obj1={
        name:"john"
    }
   // greet.sayHello.call(obj1,23)//john 23 Hello

//This is wrong way to declare function inside objects
    // let greet1={
    //     name:"joe",
    //     sayBye:()=>{
    //         console.log(`${this.name} bye`)
    //     }
    // }
    // greet1.sayBye()//This wont work
//In your code, the sayBye function is defined using an arrow function expression (() => {}). Arrow functions have a 
// lexical this binding, meaning that this inside an arrow function refers to the value of this in the surrounding lexical context. 
// In this case, the surrounding lexical context is the global scope, because arrow functions do not have their own this context.

    function SetUsername(username){
        this.username=username
        console.log(`called ${this.username}`)
    }
    function User(username,age){
        this.age=age;
        SetUsername.call(this,username)//we are invoking the setusername function with the specified context
        //if we dont pass the reference this inside setusername refers to global object
        console.log(this)// 'this' refers to the instance of User
    }

    //let user1=new User("pranai",23)
    //console.log(user1)

 //Apply with same example

    function SetUsername1(username){
        this.username=username
        console.log(`called ${this.username}`)
    }
    function User1(username,age){
        this.age=age;
        SetUsername1.apply(this,[username])//only difference
        console.log(this)// 'this' refers to the instance of User
        //O/P:-User1 { age: 23, username: 'pranai' }
    }

    let user2=new User1("pranai",23)
   console.log(user2)


//Bind check bind.js

   function dummy(message) {
    console.log(`${message}, ${this.name}`);
   }

        let person = { name: "Alice" };
        let boundGreet = dummy.bind(person, "Hello");
        boundGreet(); // Outputs: Hello, Alice

//polyfill for bind

     