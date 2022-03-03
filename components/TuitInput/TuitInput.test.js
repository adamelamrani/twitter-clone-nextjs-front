import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server/server";
import TuitInput from "./TuitInput";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  describe("When it gets an input in textbox", () => {
    test("Then it will have holabuenosdias in inputed text", () => {
      const inputedText = "hola buenos días";

      render(<TuitInput />);

      const input = screen.getByRole("textbox");
      userEvent.type(input, inputedText);

      expect(input).toHaveValue(inputedText);
    });
  });
});
