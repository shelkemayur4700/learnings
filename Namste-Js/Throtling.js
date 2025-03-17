const handleClick = () => {
  console.log("CLICKED......");
};

const throttleFunc = (fun, limit) => {
  let flag = true;
  return function () {
    const context = this,
      args = arguments;
    if (flag) {
      fun.apply(context, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};

const betterHandleClick = throttleFunc(handleClick, 3000);
