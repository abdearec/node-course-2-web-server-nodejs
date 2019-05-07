module.exports.add = (a, b) => {
  return a + b;
};
module.exports.SetName = (User, FullName) => {
  var name = FullName.split(" ");
  User.firstname = name[0];
  User.lastname = name[1];
  return User;
};

module.exports.square = x => x * x;
