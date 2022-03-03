import { rest } from "msw";

const handlers = [
  rest.post(`${process.env.TUITAH_API}/new`, (req, res, ctx) => {
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
];

export default handlers;
