import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import UserContext from "../utills/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load header component with login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //   best way is BYRole
  // const loginButton = screen.getByRole("button");
  // if multiple buttons are there then pass parameter as name
  const loginButton = screen.getByRole("button", { name: "Login" });
  //   const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});
test("Should load header component with cart items 0", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //   best way is BYRole
  // const loginButton = screen.getByRole("button");
  // if multiple buttons are there then pass parameter as name
  const cartItems = screen.getByText("Cart(0-Items)");
  //   const loginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});
test("Should change the login button to logut", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton); //click the button
  //   After click check for logout button appears or not
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
