import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { theme } from "./MaterialTheme";

import { ThemeProvider } from "@material-tailwind/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)