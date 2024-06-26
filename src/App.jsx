import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout.jsx';
import Authenticate from './pages/Authenticate.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Movie from './pages/Movie.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

import searchResultsLoader from './loaders/searchResultsLoader.js';
import movieLoader from './loaders/movieLoader.js';
import signupAction from './actions/signupAction.js';
import loginAction from "./actions/loginAction.js";

import UserContextProvider from './components/UserContextProvider.jsx';

const router = createBrowserRouter([
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
        action: loginAction,
        errorElement: <h1>Error! Can{"'"}t load the Login Page</h1>,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
        errorElement: <h1>Error! Can{"'"}t load the Login Page</h1>,
      }
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
export default App
