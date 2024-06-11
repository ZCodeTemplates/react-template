import React from "react"
import App from "./App"
import AppContext from "./common/context/AppContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ReactDOM from "react-dom/client"
import "./index.module.less"

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootEl = document.getElementById("root")!

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppContext>
        <App />
      </AppContext>
    </QueryClientProvider>
  </React.StrictMode>
)
