import SearchBox from './components/SearchBox.jsx';
import RootLayout from './pages/RootLayout.jsx';
import About from './pages/About.jsx';
import movieResultsFetchData from './loader/movieResultsFetchData.js';

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
        index: true,
        element: <SearchBox />,
        loader: movieResultsFetchData,
        errorElement: <h1>Something went wrong!</h1>,
      },
      {
        path: "about",
        element: <About />
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
