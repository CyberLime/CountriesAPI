import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CountryDetailsPage from "./pages/CountryDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":countryName", element: <CountryDetailsPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
