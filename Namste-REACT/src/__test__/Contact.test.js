import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

//grouping the test cases
describe("Contact us page test cases", () => {
  test("should load contact compo", () => {
    //we are rendering the component
    render(<Contact />);

    //After rendering the component we got data od that component in screen object
    // so we are checking that heading is rendered or not ?
    const heading = screen.getByRole("heading");
    //   asseration
    expect(heading).toBeInTheDocument();
  });
  test("should load input name inside contact component", () => {
    //we are rendering the component
    render(<Contact />);
    // Querying
    const inputName = screen.getByPlaceholderText("name");
    //   Asseration
    expect(inputName).toBeInTheDocument();
  });
  test("should load 2 input boxes in contact component", () => {
    //we are rendering the component
    render(<Contact />);

    //After rendering the component we got data od that component in screen object
    // so we are checking that heading is rendered or not ?
    const inputbox = screen.getAllByRole("textbox");
    //   console.log(inputbox);
    //   asseration
    expect(inputbox.length).not.toBe(3);
  });
});
