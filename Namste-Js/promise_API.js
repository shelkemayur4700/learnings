//PROMISE.API
const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 resolved"), 3000);
  setTimeout(() => reject("P1 rejectd"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 rejectd"), 1000);
  //   setTimeout(() => resolve("P2 resolved"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 rejected"), 2000);
  //   setTimeout(() => resolve("P3 resolved"), 2000);
});

//PROMISE.ALL
// Promise.all([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//PROMISE.allSettled
// Promise.allSettled([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//PROMISE.race
// Promise.race([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//PROMISE.any
Promise.any([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((err) => {
    console.error(err);
    console.log(err?.errors); //to see array of error
  });
