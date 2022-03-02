import { render, screen } from "@testing-library/react";
import Tuit from "./Tuit";

describe("Given a Tuit component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form ", () => {
      render(<Tuit />);

      const expectedOutput = screen.getByRole("textbox");

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  test("Then it should display a button with text 'tuit'", () => {
    const text = "Tuit";

    render(<Tuit />);

    const expectedOutput = screen.getByRole("button", { name: text });

    expect(expectedOutput).toBeInTheDocument();
    expect(expectedOutput.textContent).toBe(text);
  });
});
