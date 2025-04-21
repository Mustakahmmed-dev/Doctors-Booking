
const Doctor = ({ data }) => {
    const { name, doctor_image, experience, registration_number, education } = data;

    return (
        <div className="bg-white rounded-lg p-5 space-y-3">
            <img className="h-[250px] w-full object-cover rounded-lg" src={doctor_image} alt="Picture of the doctor" />
            <div className="flex gap-3">
                <span className="available-btn bg-slate-200">Available</span>
                <span className="experience-btn bg-slate-200"> {experience}+ Years Experience </span>
            </div>
            <div>
                <h2 className="text-2xl font-bold"> {name} </h2>
                <h3 className=" text-gray-600"> {education} </h3>
            </div>
            <div className="border border-dashed border-gray-300"></div>
            <h2 className="text-gray-600 font-semibold"> &reg; Reg No: {registration_number} </h2>
            <div className="flex">
                <button className="btn flex-grow-1 btn-outline btn-primary rounded-full font-bold">View Details</button>
            </div>
        </div>
    )
}

export default Doctor;