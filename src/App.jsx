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
import Results from "./pages/Results.jsx";


function buildRouter(ctxValue) {
  return (
  createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error 404! Not found!</h1>,
    children: [
      {
        path: "/",
        element: <Authenticate />,
        errorElement: <h1>Error! Can{"'"}t authenticate</h1>,
        children: [
          {
            path: "/",
            element: <Home />,
            errorElement: <h1>Error! Can{"'"}t load the home</h1>,
            children: [
              {
                path: "search",
                element: <Results />,
                loader: searchResultsLoader,
                errorElement: <h1>Error! Can{"'"}t load the results</h1>,
              }
            ],
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

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const ctxValue = useContext(UserContext);
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={buildRouter(ctxValue)} />
    </ThemeProvider>
  );
}
export default App
