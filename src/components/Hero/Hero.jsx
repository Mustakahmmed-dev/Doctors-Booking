
import bannerImg1 from '../../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className="bg-white p-14 rounded-lg shadow-sm my-5 space-y-4">
            <div className="space-y-4 text-center ">
                <h1 className="text-3xl font-bold md:max-w-[500px] mx-auto">Dependable Care, Backed by Trusted Professionals.</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className="flex flex-col md:flex-row gap-4 max-w-[500px] mx-auto">
                    <input className="p-4 rounded-full shadow-sm flex-grow-1" type="text" placeholder="Search any doctor" />
                    <button className="btn-my-default">Search Now</button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <img className="" src={bannerImg1} alt="Banner image" />
                <img className="" src={bannerImg1} alt="Banner image" />
            </div>
        </div>
    )
}

export default Hero;