const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 5;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1- crypto  done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2- crypto  done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3- crypto  done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4- crypto  done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5- crypto  done");
});
