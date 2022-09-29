

//3.Write a “person” class to hold all the details.

class Person{
  constructor(FirstName,LastName,Age,Gender){
    this.FirstName=FirstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Gender= Gender;

  }
}
var person1 = new Person("Abisheik","V","23","Male")
var person2 = new Person("Aanand","k","28","Male")
console.log(person1.FirstName)
console.log(person2.FirstName)