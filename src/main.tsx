import ReactDOM from "react-dom/client";

import App from "src/App";

import {BooksPage, GamesPage} from "src/pages";

import "./index.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
  </RouterProvider>,
);
