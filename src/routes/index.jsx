import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import PageError from '../pages/view404'
import LayoutDefault from '../layout/LayoutDefault'
import BlogNews from '../pages/Blog/BlogNews'
import BlogRelated from '../pages/Blog/BlogRelated'
import BlogAll from '../pages/Blog/BlogAll'
import BlogDetail from '../pages/Blog/BlogDetail'


//-obj route
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />
          },
          {
            path: "news",
            element: <BlogNews />
          },
          {
            path: "related",
            element: <BlogRelated />
          },
          {
            path: ":id",
            element: <BlogDetail />
          },
        ]
      },
      {
        path: "*",
        element: <PageError />
      }
    ]
  }
]