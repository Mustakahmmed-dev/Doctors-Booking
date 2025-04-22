import { useLoaderData } from "react-router";
import BookingCard from "../BookingCard/BookingCard";

const Bookings = () => {
    const loadedData = useLoaderData();
    const bookedDoctorsData = localStorage.getItem("bookedDoctor");
    const bookedDoctorsList = JSON.parse(bookedDoctorsData);

    const bookedDoctors = loadedData.filter(data => bookedDoctorsList.includes(data.id));
    // console.log(bookedDoctors)

    return (
        <div className="my-5 flex flex-col gap-7">

            <div className="rounded-lg bg-white p-5">
                For charts
            </div>

            <div className="space-y-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-3">My Appointments</h1>
                    <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                </div>
                <div className="flex flex-col gap-4">
                    {
                        bookedDoctors.map(doctor => <BookingCard key={doctor.id} doctor={doctor}></BookingCard>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Bookings;