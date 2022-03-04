import { rest } from "msw";

const handlers = [
  rest.post(`${process.env.NEXT_PUBLIC_API_MOCKING}/new`, (req, res, ctx) => {
    req({
      body: { text: "tuit" },
    }),
      res(
        ctx.status(201),
        ctx.json([
          {
            text: "tuit",
          },
        ])
      );
  }),

  rest.patch(`${process.env.NEXT_PUBLIC_API_MOCKING}/:id`, (req, res, ctx) => {
    req({
      body: { likes: likes + 1 },
    }),
      res(
        ctx.status(200),
        ctx.json([
          {
            likes: 2,
          },
        ])
      );
  }),
];

export default handlers;
