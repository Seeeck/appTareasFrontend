import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider  dateAdapter={AdapterDateFns}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      <ToastContainer/>
    </LocalizationProvider>
  </StrictMode>,
)
