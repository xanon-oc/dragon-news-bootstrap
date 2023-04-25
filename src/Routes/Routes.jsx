import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import Career from "../components/Career";
import Category from "../components/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5200/categories/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
