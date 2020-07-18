import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../index";

describe("Header Component", () => {
  const { queryByTestId } = render(<Header />);

  it("Should render the Header", () => {
    expect(queryByTestId("Header")).toBeTruthy();
  });
});