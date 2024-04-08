import {Suspense, lazy} from "react";
const {createBrowserRouter} = require("react-router-dom");

const Loding = <div className={'bg-red-700'}>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loding}><Main/></Suspense>
    },
    {
        path: 'about',
        element: <Suspense fallback={Loding}><About/></Suspense>
    }
])

export default root
