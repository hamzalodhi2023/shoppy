import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/layout/ui/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import UserSettings from "./pages/UserSettings";
import AppDataLoader from "./AppDataLoader";

// Create the Query Client instance
const queryClient = new QueryClient();

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
        { path: "/shop", element: <Shop /> },
        { path: "/signin", element: <Signin /> },
        { path: "/cart", element: <Cart /> },
        { path: "/user-settings", element: <UserSettings /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <AppDataLoader />
      <RouterProvider router={routes} />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}


export default App;
