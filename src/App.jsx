import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "flowbite";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Maincomponents/Layout/Layout";
import Register from "./Maincomponents/Register/Register";
import Contact from "./Maincomponents/Contact/Contact";
import Login from "./Maincomponents/Login/Login";
import Gallery from "./Maincomponents/Gallery/Gallery";
import About from "./Maincomponents/About/About";
import Home from "./Maincomponents/Home/Home";
import Blog from "./Maincomponents/Blog/Blog";
import Accomodation from "./Maincomponents/Accomodation/Accomodation";
import Checkout from "./Maincomponents/Checkout/Checkout";
import BookingDetails from "./Maincomponents/BookingDetails/BookingDetails";
import { AuthContextProvider } from "./Maincomponents/Context/authcontext";
import History from "./Maincomponents/History/History";
import Bookroom from "./Maincomponents/Booking/Booking";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "accomodation",
          element: <Accomodation />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "bookingdetails/:id",
          element: <BookingDetails />,
        },
        {
          path: "history",
          element: <History />,
        },
         
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
