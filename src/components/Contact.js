import React from "react";
const Contact = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl p-4 m-4 mt-4 ">Contact us</h1>
        <form action="">
          <input
            type="text"
            placeholder="name"
            className="border-black p-2 m-2"
          />
          <input
            type="text"
            placeholder="message"
            className="border-black p-2 m-2"
          />
          <button
            className=" bg-black text-white rounded-lg
       p-2 m-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
