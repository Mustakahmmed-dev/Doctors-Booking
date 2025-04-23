import { useLoaderData, useParams, Link, useNavigate } from "react-router";
import { BiError } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { addDoctor, getDoctor } from "../../utility/utility";
import { useState } from "react";

const DoctorDetails = () => {
    const doctorData = useLoaderData();
    const para = useParams();
    const paramsID = parseInt(para.id);

    const doctorProfile = doctorData.find(doctor => paramsID === doctor.id);
    const { id, name, doctor_image, education, hospital_affiliation, registration_number, consultation_fee, availability } = doctorProfile;

    // Navigation from doctor details to bookings page
    const navigate = useNavigate();
    const handleAppointment = () => {
        const currentBookings = getDoctor();
        const alreadyBooked = currentBookings.some(booking => booking.id === id);
        if (alreadyBooked) {
            toast.error(`You already have an appointment with ${name}`);
            return;
        } else {
            toast.success(`You have successfully booked this appointment with ${name}`);
            addDoctor(doctorProfile);
            navigate("/bookings")
        }
    }

    return (
        <div className="flex flex-col gap-5 my-6">
            <div className="rounded-lg p-6 bg-white space-y-4 text-center">
                <h1 className="text-2xl font-bold text-slate-800">Doctor's Profile Details</h1>
                <p className="md:max-w-[700px] mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloribus accusamus quo cum repellat enim qui saepe possimus porro ad. </p>
            </div>

            <div className="flex gap-4 rounded-lg p-6 bg-white space-y-4">
                <img className="rounded-lg min-w-[350px]" src={doctor_image} alt="Picture of the doctor" />
                <div className="space-y-3 flex-grow-1">
                    <h2 className="text-2xl font-bold"> {name} </h2>
                    <h3 className="text-gray-600"> {education} </h3>
                    <p className="text-gray-600">Working at:</p>
                    <h3 className="text-xl font-semibold"> {hospital_affiliation} </h3>
                    <div className="border border-dashed border-gray-300"></div>
                    <p className="text-gray-600 font-semibold"> &reg; Reg No: {registration_number} </p>
                    <div className="border border-dashed border-gray-300"></div>
                    <div className="font-semibold flex items-center gap-4">
                        <span>Availability </span>
                        {availability.map((day, index) => <span key={index} className="yellow-badge">{day}</span>)}
                    </div>
                    <h3 className="font-semibold">Consultation Fee: <span className="text-blue-600">Taka: {consultation_fee} <span className="text-gray-500">(Incl Vat)</span> Per consultation</span> </h3>
                </div>
            </div>

            <div className="flex flex-col rounded-lg p-6 bg-white space-y-5">
                <h1 className="text-2xl font-bold text-slate-800 text-center">Book an Appointment</h1>
                <div className="border border-dashed border-gray-300"></div>

                <div className="flex justify-between gap-4 font-semibold">
                    <p>Availability</p>
                    <p className="available-btn bg-green-50 shadow-sm">Doctor Available Today</p>
                </div>
                <div className="border border-gray-300"></div>

                <p className="yellow-badge flex items-center gap-2"><BiError /> Due to high patient Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button onClick={() => handleAppointment()} className="btn-my-default cursor-pointer text-center">Book Appointment</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default DoctorDetails;