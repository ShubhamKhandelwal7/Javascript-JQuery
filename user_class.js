// JavaScript source code
class User {
  constructor() {
    this.name = this.name;
    this.age = this.age;
  }

  compare(user) {
    if (this.age > user.age) return document.write(this.name + " is older than " + user.name);
    else return document.write(user.name + " is older than " + this.name);
  }
}

var user1 = new User();
user1.name = "Mary";
user1.age = 25;

var user2 = new User();
user2.name = "John";
user2.age = 30;

user1.compare(user2);
