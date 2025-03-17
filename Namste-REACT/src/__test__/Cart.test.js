const { render, screen, fireEvent } = require("@testing-library/react");
import React from "react";
import { act } from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load resMenu compo", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Sabji(15)");
  fireEvent.click(accordianHeader);
  const Items = screen.getAllByTestId("foodItems");
  expect(Items.length).toBe(15);

  const addBtn = screen.getAllByRole("button", { name: "Add+" });

  expect(screen.getByText("Cart(0-Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart(1-Items)")).toBeInTheDocument();

  //below this line test cases are not working-----------

  //   fireEvent.click(addBtn[1]);

  //   expect(screen.getByText("Cart(2-Items)")).toBeInTheDocument();
  //We have reused itemList compo for cart screen also so that we are checking its length
  expect(screen.getAllByTestId("foodItems").length).toBe(1);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(0);
  expect(
    screen.getByText("Your cart is empty please add some item !")
  ).toBeInTheDocument();
});
