
const BookingCard = ({doctor}) => {
    const {name, education, consultation_fee} = doctor;

    return(
        <div className="flex flex-col p-5 bg-white rounded-lg space-y-5">
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold mb-3"> {name} </h2>
                    <h3 className="text-gray-600"> {education} </h3>
                </div>
                <p className="text-gray-600 font-semibold">Appointment Fee: {consultation_fee} Taka + Vat </p>
            </div>
            <div className="border border-dashed border-gray-300"></div>
            <button className="btn btn-outline btn-error font-semibold rounded-full">Cancel Appointment</button>
        </div>
    )
}

export default BookingCard;