import { useLoaderData } from "react-router";
import BookingCard from "../BookingCard/BookingCard";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Suspense, useEffect, useState } from "react";
import { cancelDoctorBooking, getDoctor } from "../../utility/utility";
import EmptyBookings from "../../components/EmptyBookings/EmptyBookings";


const Bookings = () => {
    // const loadedData = useLoaderData();
    const [displayDoctors, setDisplayDoctors] = useState([]);

    useEffect(() => {
        setDisplayDoctors(getDoctor());
    }, [])


    const handleDelete = (id) => {
        cancelDoctorBooking(id);
        setDisplayDoctors(getDoctor());
    }

    if (displayDoctors.length < 1) return <EmptyBookings></EmptyBookings>

    // Triangle shape of the chart
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        const path = `
          M${x},${y + height}
          C${x + width / 3},${y + height} 
          ${x + width / 2},${y + height / 3} 
          ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3} 
          ${x + 2 * width / 3},${y + height} 
          ${x + width},${y + height}
          Z
        `;

        return <path d={path} fill={fill} />;
    };

    return (
        <div className="my-5 flex flex-col gap-7">
            <div className="rounded-lg bg-white p-5">
                <BarChart width={600} height={300} data={displayDoctors}>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />}>

                    </Bar>
                </BarChart>
            </div>

            <div className="space-y-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-3">My Appointments</h1>
                    <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                        {
                            displayDoctors.map(doctor => <BookingCard key={doctor.id} doctor={doctor} handleDelete={handleDelete}></BookingCard>)
                        }
                    </Suspense>
                </div>
            </div>

        </div>
    )
}

export default Bookings;