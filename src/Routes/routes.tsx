import { createBrowserRouter } from "react-router-dom";
import { HomeLayout} from "../components/Layout"
import { HomeScreen } from "../Pages";

export const Element =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
           {
            index:true,
            element:<HomeScreen/>
           }
        ]
    }
])