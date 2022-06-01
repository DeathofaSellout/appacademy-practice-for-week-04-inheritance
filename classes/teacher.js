const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience ){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  static combinedYearsOfExperience(teachers){
    let total = 0;
    teachers.forEach(teacher => total += teacher.yearsOfExperience);
    return total;
  }
}


// Create a static method called combinedYearsOfExperience that takes in an array
// of Teacher instances, teachers, as a parameter and returns the sum of the
// yearsOfExperience of all teachers.

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}