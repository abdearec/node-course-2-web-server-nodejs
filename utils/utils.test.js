const expect = require("expect");
const utils = require("./utils");

//test if have a two numbers
it("should add two numbers", () => {
  var res = utils.add(33, 11);
  expect(res)
    .toBe(44)
    .toBeA("number");
  // if (res !== 44) {
  //   throw new Error("value not correct");
  // }
});
it("should square a number", () => {
  var res = utils.square(3);
  expect(res)
    .toBe(9)
    .toBeA("number");
  // if (res !== 9) {
  //   throw new Error("expect 9 but value isnt correct");
  // }
});

it("should set FirstName and LastName", () => {
  var user = { location: "kenitra", age: 25 };
  var res = utils.SetName(user, "Abdellah Bouskine");
  //expect(res).toEqual(user);
  expect(res).toInclude({
    firstname: "Abdellah",
    lastname: "Bouskine"
  });
});
