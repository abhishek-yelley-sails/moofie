// import SearchBox from './components/SearchBox.jsx';
import Home from './pages/Home.jsx';
import RootLayout from './pages/RootLayout.jsx';
import About from './pages/About.jsx';
import Movie from './pages/Movie.jsx';
import searchResultsLoader from './loader/searchResultsLoader.js';
import movieLoader from './loader/movieLoader.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
        loader: searchResultsLoader,
        errorElement: <h1>Error! Can{"'"}t load the results</h1>,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "movie/:id",
        element: <Movie />,
        loader: movieLoader,
        errorElement: <h1>Error! Can{"'"}t load the Movie</h1>,
      }
    ],
    errorElement: <h1>Error 404! Not found!</h1>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App
