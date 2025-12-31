import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import App from "../App";
import Greetings from "./Greetings";
import ListPost from "./Blogs/ListPost"
import CreatePost from "./Blogs/CreatePost";
import ViewPost from "./Blogs/Viewpost";
import EditPost from "./Blogs/EditPost";
import Register from "./auth/register";
import Login from "./auth/Login";

const router = createBrowserRouter([
    { path: '/home', element: <App/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: 'greeting/:name', element: <Greetings/>},
    { path: '/blog/posts', element:<ListPost/>},
    { path : 'blog/posts/create' , element : <CreatePost/>},
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
    { path : '/', element: <Register/>},
    { path : '/login', element : <Login/>},
]);

export default router;