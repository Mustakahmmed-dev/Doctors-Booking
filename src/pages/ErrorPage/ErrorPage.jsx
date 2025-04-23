import { Link } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[400px] flex justify-center flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">Sorry, this page is not available! </h2>
                <p>Please click the button below to go inside the website.</p>
                <Link to="/" className="btn btn-neutral">Go back</Link>
            </div>
        </div>
    )
}

export default ErrorPage;