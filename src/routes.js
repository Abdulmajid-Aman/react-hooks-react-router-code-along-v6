import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";



const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />,
        errorElement: <ErrorPage />
    },
    {
        path : "/login",
        element : <Login />,
        errorElement: <ErrorPage />
    },
    {
        path : "/about",
        element : <About />,
        errorElement: <ErrorPage />
    },
    {
        path : "/profile/:your_profile_id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
    }
])

export default router;