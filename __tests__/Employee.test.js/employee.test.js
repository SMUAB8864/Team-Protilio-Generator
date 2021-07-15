const fs = require("fs");
const Employee = require('../Homework - 10 - OOP/Library/Engineer');



test('test to see if name, id, and email are strings', () => {

    const person = new Employee('')

    expect(person.name).toEqual(expect.any(String))
    expect(person.id).toEqual(expect.any(Number))
    expect(person.email).toEqual(expect.any(String))




});
