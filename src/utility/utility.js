
const getBookedDoctor = () => {
    const bookedDoctor = localStorage.getItem("bookedDoctor");

    if (bookedDoctor) {
        const parsedDoctor = JSON.parse(bookedDoctor);
        return parsedDoctor;
    }
    else {
        return [];
    }
}


const setBookDoctor = (id) => {
    const bookedDoctor = getBookedDoctor();

    if (bookedDoctor.includes(id)) {
        alert("Sorry, it exists")
    }
    else {
        bookedDoctor.push(id);
        const data = JSON.stringify(bookedDoctor);
        localStorage.setItem("bookedDoctor", data);
    }

    const updatedBookings = bookedDoctor.filter(booking => booking !== id);
    bookedDoctor.push(updatedBookings);


}
const removeDoctor = (id) => {
    const bookedDoctor = getBookedDoctor();

    const updatedBookings = bookedDoctor.filter(booking => booking !== id);

    const data = JSON.stringify(updatedBookings);
    localStorage.setItem("bookedDoctor", data);

}

export { setBookDoctor, getBookedDoctor, removeDoctor };