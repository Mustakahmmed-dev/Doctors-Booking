import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const Root = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === 'loading') {
            setIsLoading(true)
        }
        else {
            setIsLoading(false)
        }
    }, [navigation.state])


    return (
        <>
            {isLoading && <Loader/>}
            <div>
                <div className="max-w-6xl mx-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>

                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Root;