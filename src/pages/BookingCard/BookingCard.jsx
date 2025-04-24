import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cancelDoctorBooking } from "../../utility/utility";

const BookingCard = ({ doctor, handleDelete }) => {
    const { id, name, education, consultation_fee } = doctor;


    const handleCancelDoctorBooking = (id) => {
        cancelDoctorBooking(id);
        handleDelete(id);
        toast.success(`Your appointment with has been ${name} cancelled`)
    }

    return (
        <>
            <div className="flex flex-col p-5 bg-white rounded-lg space-y-5">
                <div className="flex justify-between items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold mb-3"> {name} </h2>
                        <h3 className="text-gray-600"> {education} </h3>
                    </div>
                    <p className="text-gray-600 font-semibold">Appointment Fee: {consultation_fee} Taka + Vat </p>
                </div>
                <div className="border border-dashed border-gray-300"></div>
                <button onClick={() => handleCancelDoctorBooking(id)} className="btn btn-outline btn-error font-semibold rounded-full">Cancel Appointment</button>

            </div>
        </>
    )
}

export default BookingCard;