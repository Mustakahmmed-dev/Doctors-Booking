
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
        
        if(bookedDoctor.includes(id)){
            alert("Sorry, it exists")
        }
        else{
            bookedDoctor.push(id);
            const data = JSON.stringify(bookedDoctor);
            localStorage.setItem("bookedDoctor", data);
        }
        
    }


   
    export {setBookDoctor};