class Employee {
    constructor(name, id, email,) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.gitHub = gitHub;
      this.school = school;
      this.officeNumber = officeNumber;
      
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Employee";
    }
}


module.exports = Employee;


