const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
    //Check the specs to determine which parameters you need to inherit.
  }
  static compareGPA(firstSt, secondSt) {
    if (firstSt.GPA > secondSt.GPA) {
      return `${firstSt.firstName} ${firstSt.lastName} has the higher GPA.`;
    } else if (firstSt.GPA < secondSt.GPA) {
      return `${secondSt.firstName} ${secondSt.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA.";
    }
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}