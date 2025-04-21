import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root;