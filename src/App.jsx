import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";

import RootLayout from './pages/RootLayout.jsx';
import Authenticate from './pages/Authenticate.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Movie from './pages/Movie.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

import searchResultsLoader from './loaders/searchResultsLoader.js';
import movieLoader from './loaders/movieLoader.js';
import loginLoader from "./loaders/loginLoader.js";
import logoutLoader from "./loaders/logoutLoader.js";
import signupAction from './actions/signupAction.js';
import loginAction from "./actions/loginAction.js";

import { UserContext } from "./components/UserContextProvider.jsx";
import Profile from "./pages/Profile.jsx";


function buildRouter(ctxValue) {
  return (
  createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error 404! Not found!</h1>,
    children: [
      {
        index: "/",
        element: <Authenticate />,
        errorElement: <h1>Error! Can{"'"}t authenticate</h1>,
        children: [
          {
            index: "/",
            element: <Home />,
            loader: searchResultsLoader,
            errorElement: <h1>Error! Can{"'"}t load the results</h1>,
          },
          {
            path: "movie/:id",
            element: <Movie />,
            loader: movieLoader,
            errorElement: <h1>Error! Can{"'"}t load the Movie</h1>,
          },
          {
            path: "profile",
            element: <Profile />,
            errorElement: <h1>Error! Can{"'"}t load the Profile</h1>,
          }
        ]
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />,
        action: (actionParams) => loginAction(actionParams, ctxValue),
        loader: (loaderParams) => loginLoader(loaderParams, ctxValue),
        errorElement: <h1>Error! Can{"'"}t load the Login Page</h1>,
      },
      {
        path: "signup",
        element: <Signup />,
        action: (actionParams) => signupAction(actionParams, ctxValue),
        errorElement: <h1>Error! Can{"'"}t load the Login Page</h1>,
      },
      {
        path: "logout",
        loader: (loaderParams) => logoutLoader(loaderParams, ctxValue),
      }
    ],
  },
]))}

// import { useEffect } from "react";

function App() {
  const ctxValue = useContext(UserContext);
  /*
  useEffect(() => {
    Array.prototype.findAsync = async function (asyncCallback) {
      const promises = this.map(asyncCallback);
      const results = await Promise.all(promises);
      const index = results.findIndex(result => result);
      return this[index];
    }
    const lol = [1, 2, 3];
    const result = lol.findAsync(async (item) => 2 === await new Promise((res) => setTimeout(() => res(item),3000)));
    result.then(res => console.log(res))
  }, [])
  */
  return (
    <RouterProvider router={buildRouter(ctxValue)} />
  );
}
export default App
