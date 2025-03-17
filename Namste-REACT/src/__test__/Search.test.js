import { fireEvent, render, screen } from "@testing-library/react";
import React, { act } from "react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import { RESTAURANT_DATA } from "../mocks/Data.jS";
import "@testing-library/jest-dom";
//mocking api call by static data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
//SEARCH BAR TEST CASE
it("Should search res list for idli text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "idli" } });

  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");

  expect(cardAfterSearch.length).toBe(1);
});

//TOP RATED RES BUTTON TEST CASE
it("should filter top rated rest card", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforFilter.length).toBe(8);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(filterBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
