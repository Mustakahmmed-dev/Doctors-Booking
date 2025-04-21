
import successDoctor from '../../assets/success-doctor.png';
import successReview from '../../assets/success-review.png';
import successStaffs from '../../assets/success-staffs.png';
import successPatients from '../../assets/success-patients.png';

const Services = () => {
    return(
        <div className="my-7 space-y-5">
           <div className="text-center space-y-4">
           <h2 className="text-2xl font-bold">We Provide Best Medical Services</h2>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
           </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-lg bg-white space-y-3">
                    <img src={successDoctor} alt="" />
                    <h1 className="text-3xl font-extrabold">435+</h1>
                    <p className="text-gray-500 font-semibold">Total doctors</p>
                </div>
                <div className="p-5 rounded-lg bg-white space-y-3">
                    <img src={successReview} alt="" />
                    <h1 className="text-3xl font-extrabold">230+</h1>
                    <p className="text-gray-500 font-semibold">Total Reviews</p>
                </div>
                <div className="p-5 rounded-lg bg-white space-y-3">
                    <img src={successPatients} alt="" />
                    <h1 className="text-3xl font-extrabold">540+</h1>
                    <p className="text-gray-500 font-semibold">Total Patients</p>
                </div>
                <div className="p-5 rounded-lg bg-white space-y-3">
                    <img src={successStaffs} alt="" />
                    <h1 className="text-3xl font-extrabold">998+</h1>
                    <p className="text-gray-500 font-semibold">Total Staffs</p>
                </div>
                
            </div>
          
        </div>
    )
}

export default Services;