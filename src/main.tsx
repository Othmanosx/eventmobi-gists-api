import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Container } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Container>
        <App />
      </Container>
    </QueryClientProvider>
  </React.StrictMode>
)
