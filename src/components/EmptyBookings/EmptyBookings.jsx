import { Link } from "react-router";

const EmptyBookings = () => {
    return(
        <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Your Have No Bookings Today</h1>
            <p>To set bookings, click on browse more</p>
            <Link className="btn btn-neutral" to="/">Browse More</Link>
        </div>
    )
}

export default EmptyBookings;