// import { render, screen } from "@testing-library/react";
// import App from "../App";

// describe("App", () => {
//   test("タイトルがあること",() => {
//     render(<App />);
//     const title = screen.getByTestId("title");
//     expect(title).toBeInTheDocument();
//   })
// })

import App from "../App";
import { render, screen } from "@testing-library/react";

describe("title", () => {
  it("should render title", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});