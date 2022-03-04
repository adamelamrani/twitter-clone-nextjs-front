import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Given an Home page component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a title", () => {
      const title = "Tuitah!";

      render(<Home />);

      const expectedOutput = screen.getByRole("heading", { name: title });

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
