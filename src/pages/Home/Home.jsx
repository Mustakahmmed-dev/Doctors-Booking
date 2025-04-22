import { useLoaderData } from "react-router";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar"
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import { Suspense } from "react";

const Home = () => {
    const loadedData = useLoaderData();

    return (
            <div className="">
                <Hero></Hero>
                <Doctors loadedData={loadedData}></Doctors>
                <Services></Services>
            </div>
    )
}

export default Home;