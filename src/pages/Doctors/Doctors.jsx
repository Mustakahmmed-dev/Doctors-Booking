import { Suspense } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({loadedData}) => {

    return(
        <div className="max-w-6xl mx-auto">
            <div className="text-center p-5 space-y-3 md:max-w-[800px] mx-auto">
                <h1 className="text-3xl font-bold">Our Best Doctors</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
               <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
               {
                    loadedData.map(data => <Doctor key={data.id} data={data}></Doctor>)
                }
               </Suspense>
            </div>

        </div>
    )
}

export default Doctors;