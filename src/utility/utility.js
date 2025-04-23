export const getDoctor = () => {
    const doctors = localStorage.getItem("Doctors");
    if(doctors) return JSON.parse(doctors)
        return [];
}

export const addDoctor = (doctorProfile) => {
    const doctors = getDoctor();
    const isExist = doctors.find(doctor => doctor.id === doctorProfile.id);
    if(isExist) return console.log("It exists");

    doctors.push(doctorProfile);
    localStorage.setItem("Doctors", JSON.stringify(doctors));
    
}

export const cancelDoctorBooking = (id) => {
    const doctors = getDoctor();
    const remainingDoctors = doctors.filter(doctor => doctor.id !== id);
    
    localStorage.setItem("Doctors", JSON.stringify(remainingDoctors));
}