import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../Component/AllCourses";
import Main from '../Layout/Main'
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import CoursePremium from "../Pages/CoursePremium";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/courses",
                element: <Courses />,
                loader: async () => {
                    return fetch('https://e-learning-server-six.vercel.app/courses');
                },
                children: [
                    {
                        path: "/courses",
                        element: <AllCourses />,
                        loader: async () => {
                            return fetch('https://e-learning-server-six.vercel.app/courses');
                        },
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails />,
                        loader: async ({ params }) => {
                            return fetch(`https://e-learning-server-six.vercel.app/courses/${params.id}`)
                        }
                    },
                ]
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/courses/premium/:id",
                element: <PrivetRoute><CoursePremium /></PrivetRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://e-learning-server-six.vercel.app/courses/${params.id}`)
                }
            },
        ]
    },
    {
        path: '*/*',
        element: <ErrorPage />
    }
]);