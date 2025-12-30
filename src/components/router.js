import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import App from "../App";
import Greetings from "./Greetings";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: 'greeting/:name', element: <Greetings/>},
]);

export default router;