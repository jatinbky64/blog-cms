import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import BlogListing from "./pages/BlogListing";
import BlogDetails from "./pages/BlogDetails";

// Define your routes using the createBrowserRouter API
const routes = [
  {
    path: "/",
    element: <RootLayout><BlogListing /></RootLayout>,
  },
  {
    path: "/blog/:id",
    element: <RootLayout><BlogDetails /></RootLayout>,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true, // Enable future flags
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
