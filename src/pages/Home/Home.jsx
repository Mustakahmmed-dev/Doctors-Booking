import { useLoaderData } from "react-router";
import Hero from "../../components/Hero/Hero";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const Home = () => {
    const loadedData = useLoaderData();

    return (
            <div>
                <Hero></Hero>
                <Doctors loadedData={loadedData}></Doctors>
                <Services></Services>
            </div>
    )
}

export default Home;