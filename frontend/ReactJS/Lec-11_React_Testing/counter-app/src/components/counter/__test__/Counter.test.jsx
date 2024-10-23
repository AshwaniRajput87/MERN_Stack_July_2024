import React from "react";
import Counter from "../Counter";

import { render, screen, fireEvent } from "@testing-library/react";

describe("Counter Component", () => {
  test("Sanpshot of counter comp", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the counter comp with initial value", () => {
    //const {asFragment} = render(<Counter />);
    render(<Counter />);
    const decrementBtn = screen.getByText("-");
    const countText = screen.getByText("0");
    const incrementBtn = screen.getByText("+");

    expect(decrementBtn).toBeTruthy();
    expect(incrementBtn).toBeTruthy();
    expect(countText).toBeTruthy();
  });

  test("increment btn must increase the value of count", () => {
    render(<Counter />);

    const incrementBtn = screen.getByText("+");

    fireEvent.click(incrementBtn);

    const countText = screen.getByText("1");

    expect(countText).toBeTruthy();
  });

  // Assignment: Write the test case for decrement button.
});
