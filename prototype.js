function Person(name) {
    this.name = name;
}
    console.log(Person.prototype)

  const person1 = new Person("Alice");
  const person2 = new Person("Bob");

  person1.greet ="hi"  //same as person1[‘greet]=”hi”
//   console.log(person2)// Person { name: 'Bob' }
//   console.log(person1); // Person { name: 'Alice', greet: 'hi' }
//   delete person1.greet//deleting the property to person1 object
//   console.log(person1);// Person { name: 'Alice' }
