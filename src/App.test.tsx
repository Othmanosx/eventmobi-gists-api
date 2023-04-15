import { render, screen, waitFor } from "@testing-library/react"
import {
  beforeAll,
  afterEach,
  afterAll,
  test,
  expect,
  describe,
  beforeEach,
} from "vitest"
import { rest } from "msw"
import { setupServer } from "msw/node"
import userEvent from "@testing-library/user-event"
import App from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { act } from "react-dom/test-utils"

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const server = setupServer(
  rest.get("https://api.github.com/users/mojombo/gists", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          description: "Test gist 1",
          files: {
            "index.js": {
              filename: "index.js",
              language: "JavaScript",
            },
          },
          forks_url: "https://api.github.com/gists/1/forks",
        },
        {
          id: "2",
          description: "Test gist 2",
          files: {
            "styles.css": {
              filename: "styles.css",
              language: "CSS",
            },
          },
          forks_url: "https://api.github.com/gists/2/forks",
        },
      ])
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders the search input and table", async () => {
  render(<App />, { wrapper })
  const searchInput = screen.getByPlaceholderText("Enter GitHub username")
  expect(searchInput).toBeDefined()
  const table = screen.getByText("Forks")
  expect(table).toBeDefined()
})

describe("App", () => {
  beforeEach(() => {
    render(<App />, { wrapper })
    const searchInput = screen.getByPlaceholderText("Enter GitHub username")
    const searchButton = screen.getByRole("button", { name: "Search" })

    // Perform a search
    act(() => {
      userEvent.type(searchInput, "mojombo")
      userEvent.click(searchButton)
    })
  })

  test("displays gists", async () => {
    await waitFor(() => expect(screen.getByText("Test gist 1")).toBeDefined())
  })

  test("displays files and badges", async () => {
    await waitFor(() => expect(screen.getByText("index.js")).toBeDefined())
    await waitFor(() => expect(screen.getByText("JavaScript")).toBeDefined())
  })
})
