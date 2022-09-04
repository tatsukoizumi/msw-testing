import { render, screen, waitFor, within } from "@testing-library/react"
import { SWRConfig } from "swr"
import { server } from "../mocks/server"
import Home from "../pages"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("home", async () => {
  render(
    // clear cache by adding empty value
    <SWRConfig value={{ provider: () => new Map() }}>
      <Home />
    </SWRConfig>
  )
  await waitFor(() => screen.getByRole("main"))
  // to be get mock response
  expect(screen.getByText("tatsukoizumi")).toBeTruthy()
})
