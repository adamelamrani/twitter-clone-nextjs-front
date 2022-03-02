import { render, screen } from "@testing-library/react";
import TuitInput from "./TuitInput";

describe("Given a Tuit component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form ", () => {
      render(<TuitInput />);

      const expectedOutput = screen.getByRole("textbox");

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  test("Then it should display a button with text 'tuit'", () => {
    const text = "Tuit";

    render(<TuitInput />);

    const expectedOutput = screen.getByRole("button", { name: text });

    expect(expectedOutput).toBeInTheDocument();
    expect(expectedOutput.textContent).toBe(text);
  });
});
