import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";

export const Context = createContext(null);

const queryClient = new QueryClient()

const AppWrapper = () => {
  // Set initial state to not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isAuthenticated, setIsAuthenticated, user, setUser };

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={value}>
        <BrowserRouter>
          <ReactQueryDevtools />
          <App />
        </BrowserRouter>
      </Context.Provider>
    </QueryClientProvider>
  );
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
