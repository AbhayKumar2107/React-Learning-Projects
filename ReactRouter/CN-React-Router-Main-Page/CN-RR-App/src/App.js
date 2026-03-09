import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter.jsx"


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path:"", element: <Hero />
      },
      {
        path:"/courses",
        children:[
          {path:"", element: <Courses/>},
          {path:":courseId", element:<Details/>},
        ],
      },
      {
        path:"/learn/:courseId",
        element:<Learn/>,
        children:[
          {
            path:"chapter/:chapterId",
            element: <Chapter/>
          },

        ]
      },
    ],
  },
])



function App() {
  return (
    <RouterProvider router={browserRouter}></RouterProvider>
  );
}

export default App;
