// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Layout from "./components/layout/ui/Layout";
// import Home from "./pages/Home";
// import Error from "./pages/Error";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import Shop from "./pages/Shop";
// import Signin from "./pages/Signin";
// import { ToastContainer } from 'react-toastify';
// import Cart from "./pages/Cart";
// import UserSettings from "./pages/UserSettings";
// import { useDispatch } from "react-redux";
// import { useProducts } from "./api/ProductMutations";
// import { useEffect } from "react";

// const queryClient = new QueryClient();

// function App() {

//   const dispatch = useDispatch();
//   const { data, isLoading, error } = useProducts();

//   // Centralized fetching of product data
//   useEffect(() => {
//     if (data) {
//       dispatch({ type: "SET_PRODUCTS", payload: data });
//       dispatch({ type: "SET_LOADING", payload: isLoading });
//       dispatch({ type: "SET_ERROR", payload: error });
//     }
//   }, [data, isLoading, error, dispatch]);

//   let routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       errorElement: <Error />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/about",
//           element: <About />
//         },
//         {
//           path: "/blog",
//           element: <Blog />
//         },
//         {
//           path: "/contact",
//           element: <Contact />
//         },
//         {
//           path: "/shop",
//           element: <Shop />
//         },
//         {
//           path: "/signin",
//           element: <Signin />
//         },
//         {
//           path: "/cart",
//           element: <Cart />
//         },
//         {
//           path: "/user-settings",
//           element: <UserSettings />
//         }
//       ]
//     }
//   ])
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={routes} />
//         < ToastContainer />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </>
//   )
// }

// export default App