import { render, screen } from "@testing-library/react";
import HotelCard from "../components/HotelCard";
import React from "react";
import resData from "../mocks/hotelCardData.json";
import "@testing-library/jest-dom";
it("should render compo with props data ", () => {
  render(<HotelCard resData={resData} />);
  const res = screen.getByText("Thepla House By Tejal's Kitchen");
  expect(res).toBeInTheDocument();
});
