import { render, screen } from "@testing-library/react";
import Tuit from "./Tuit";

describe("Give na Tuit component", () => {
  describe("When it receives a tuit input", () => {
    test("Then it should render the received text, date and likes", () => {
      const tuit = {
        date: "1111-10-11T00:14:44.000Z",
        likes: 11111,
        text: '"Hola que tal"',
        id: "621fb707499281090f4741af",
      };

      render(<Tuit tuit={tuit} />);
      const expectedText = screen.getByText(tuit.text);
      const expectedData = screen.getByText(tuit.date);
      const expectedLikes = screen.getByText(tuit.likes);

      expect(expectedText).toBeInTheDocument();
      expect(expectedData).toBeInTheDocument();
      expect(expectedLikes).toBeInTheDocument();
    });
  });
});
