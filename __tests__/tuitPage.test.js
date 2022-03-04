import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import TuitPage, { getServerSideProps } from "../pages/tuit-page";
import { server } from "../mocks/server/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Given a tuitPage page", () => {
  describe("When it's rendered and provided with a list of 5 tuits", () => {
    test("Then it should render a total of 5 Tuits", () => {
      const tweets = [
        {
          text: "Kevin love Cypress",
          likes: 0,
          date: "2022-03-02T20:03:42.151Z",
          id: "621fcd9e851bd5b06eb4c8e1",
        },
        {
          date: "2022-03-02T20:01:16.793Z",
          text: "Bondia2",
          likes: 0,
          id: "621fcf27f0a087166cd95787",
        },
        {
          date: "2022-03-02T20:01:16.793Z",
          text: "Bondia3",
          likes: 0,
          id: "621fcf4ff0a087166cd95789",
        },
        {
          date: "2022-03-02T20:07:18.530Z",
          text: "test2",
          likes: 0,
          id: "621fd12df6127bd5a2d03526",
        },
        {
          date: "2022-03-02T20:07:18.530Z",
          text: "Este es un twuit muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy largo",
          likes: 0,
          id: "621fe23df6127bd5a2d03528",
        },
      ];

      render(<TuitPage tuits={tweets} />);

      const expectedOutput = screen.getAllByRole("heading", {
        name: tweets.id,
      });
      expectedOutput.forEach((tweet) => expect(tweet).toBeInTheDocument());
    });
  });

  test("check on good case", async () => {
    const tweets = [
      {
        text: "Bondia3",
      },
    ];

    const response = {
      props: {
        tweets,
      },
    };

    expect(await getServerSideProps()).toEqual(response);
  });
});
