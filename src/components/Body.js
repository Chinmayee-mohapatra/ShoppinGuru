import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <MainPage />,
    },
  ]);

  // We need to setup the onAuthStateChanged type of an event listener only once in our application.
  // Hence we are using it inside useEffect with empty dependency array.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // for login/signup
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        // for logout
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
