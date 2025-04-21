import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";

const Root = () => {
    return(
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;