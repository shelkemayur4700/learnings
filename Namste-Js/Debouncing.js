let counter = 0;
let getData = () => {
  console.log("fetch data.......", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let contex = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(contex, args);
    }, delay);
  };
};
const betterFunction = debounce(getData, 300);
