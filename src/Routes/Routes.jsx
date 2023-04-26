import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import About from "../components/About";
import Career from "../components/Career";
import Category from "../components/Category";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import LoginSignUp from "../Layout/LoginSignUp";
import NewsDetails from "../Layout/NewsDetails";
import News from "../components/News";
import PrivateRoute from "../SecureRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignUp />,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsDetails />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5200/news/${params.id}`),
      },
    ],
  },
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
        element: (
          <PrivateRoute>
            <Career />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
