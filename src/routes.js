import {DEPARTAMENT_ROUTE, CARD_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Departament from "./pages/Departament";

import Auth from "./pages/Auth";
import Main from "./pages/Main";

export const authRoutes = [
    {
        path: DEPARTAMENT_ROUTE,
        Component: Departament
    },
    
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]