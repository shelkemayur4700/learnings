import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Calling time interval");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("useEffect returned");
    };
  }, []);
  console.log("render");
  return (
    <div className="user-card">
      <h2>Name: {name + "Fumctional componenet"} </h2>
      {/* <h2>Count: {count} </h2>
      <h2>Count2: {count2} </h2> */}
      <h2>Location: Pune Maharashtra</h2>
      <h2>Contact: @MayurShelke</h2>
    </div>
  );
};

export default User;
