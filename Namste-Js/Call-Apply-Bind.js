// 1.CALL METHOD
// in call method we pass arguments seperately comma seperated
let name = {
  firstName: "Akshay",
  lastName: "Saini",
  //when we have to reuse methods like this we create them outside of object so can access
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  // function for apply method
  printGame: function (apply, method) {
    console.log(
      "using" +
        " " +
        apply +
        " " +
        method +
        " " +
        this.firstName +
        " " +
        this.lastName
    );
  },
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName,
    " " + hometown + " " + state
  );
};

let name2 = {
  firstName: "Sachin",
  lastName: "tendulkar",
};

// name.printName.call(name2); //to call function in object
// printFullName.call(name2, "Maharashtra", "Mumbai");

// 2.APPLY METHOD
// in apply method we pass args as second argument as array
// list to methods which are required as params to method

// name.printGame.apply(name2, ["Apply", "Method"]);
// printFullName.apply(name2, ["Maharashtra", "Mumbai"]);

// 3. BIND METHOD
// Bind method does not directly calls method it make exactly same copy of method and call/invoke it later.
let printMyName = printFullName.bind(name2, "Maharashtra", "Mumbai");
// console.log(printMyName); //whole method printfullName
// printMyName();

// --------POLYFILL FOR BIND METHODS------------->

let names = {
  firstName: "Mayur",
  lastName: "Shelke",
};

let printNames = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + hometown + ", " + state
  );
};

//NORMAL BIND FUNCTION
let namePrint = printNames.bind(names, "Pune");
namePrint("Maharashtra");

// CUSTOM BIND FUNCTION
Function.prototype.myBind = function (...args) {
  // console.log("args...>", ...args);
  // console.log("this", this);
  let func = this;
  params = args.slice(1);
  return function (...args2) {
    func.apply(args[0], [...params, ...args2]);
  };
};

let customNamePrint = printNames.myBind(names, "Pune");
customNamePrint("Maharashtra");
