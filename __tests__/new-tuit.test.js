import { render, screen } from "@testing-library/react";
import NewTuit from "../pages/new-tuit";

describe("Given a new tuit page component", () => {
  describe("When it's rendered", () => {
    test("Then it should invoke tuit input component", () => {
      render(<NewTuit />);
      const expectedInput = "textbox";
      const expectedButton = "button";

      const expectedOutput = screen.getByRole(expectedInput);
      const expectedOutputTwo = screen.getByRole(expectedButton, {
        name: "Tuit",
      });

      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutputTwo).toBeInTheDocument();
    });
  });
});
