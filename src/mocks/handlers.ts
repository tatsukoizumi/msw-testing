import { rest } from "msw"

export const handlers = [
  rest.get("/api/hello", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "tatsukoizumi",
      })
    )
  }),
]
