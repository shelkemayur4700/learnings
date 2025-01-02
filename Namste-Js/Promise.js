//consumer part of promise e.g. Frontend
const cart = ["shoes", "pant", "kurta"];

const promise = createOrder(cart);
// console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (data) {
    console.log(
      "No matter what happen i will be called once any promise gets rejected"
    );
  }); //handle error gracefully

//Producer part Backend

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create Order Make Data Base Operation
    //Validate Cart
    //return OrderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const ordeId = "1234";
    if (ordeId) {
      setTimeout(function () {
        resolve(ordeId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull!");
  });
}

function validateCart() {
  return true;
  //   return false; //to reject promise
}
//HOMEWORK
//createOrder
// proceedToPayment
// showCartSummary
//updateWallet

//Consumer
const orderData = createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then(function (cartSummary) {
    return showCartSummary(cartSummary);
  })
  .then(function (amount) {
    updateWallet(amount);
  })
  .catch(function (error) {
    console.log(error);
  });

//producer--Server--BE--return-Promise

//createOrder
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    const ordeId = "1234";
    resolve(ordeId);
  });
}
//proceedToPyment
function proceedToPyment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve(orderId);
  });
}
//showCartSummary
function showCartSummary(cart) {
  return new Promise(function (resolve, reject) {
    resolve(cart);
  });
}
//updateWallet
function updateWallet(cart) {
  return new Promise(function (resolve, reject) {
    resolve(cart);
  });
}
