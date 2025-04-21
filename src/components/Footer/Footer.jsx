import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

// Icons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const links = <>
    <NavLink className="mr-5 text-gray-700 font-semibold" to="/">Home</NavLink>
    <NavLink className="mr-5 text-gray-700 font-semibold" to="bookings">Bookings</NavLink>
    <NavLink className="mr-5 text-gray-700 font-semibold" to="blogs">Blogs</NavLink>
    <NavLink className="mr-5 text-gray-700 font-semibold" to="contact">Contact Us</NavLink>
</>

const Footer = () => {
    return (
        <div className="text-center">
            <div className="space-y-5 bg-white p-20">
                <div className="space-x-2">
                    <img className="inline" src={logo} alt="Phudu Logo" />
                    <h2 className="inline mt-1 text-[#0F0F0F] font-extrabold text-2xl">Phudu</h2>
                </div>
                <ul>
                    {links}
                </ul>
                <div className="border border-gray-200"></div>
                <div className="flex justify-center gap-3 text-2xl">
                    <FaFacebook />
                    <FaXTwitter />
                    <FaLinkedin />
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer;