import { FaLinkedinIn } from "react-icons/fa"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr"; 
import { HiMail } from "react-icons/hi"; 
import { Link } from 'react-router-dom'
import scroll from '../../Assets/img/scroll down.png'
import vactor from '../../Assets/img/Vector 23.png'

import group1 from '../../Assets/img/Group 90.png'
import group3 from '../../Assets/img/Group 92.png'

import './home1.css'


import img1 from '../../Assets/img/1left.png'
import img2 from '../../Assets/img/2left.png'
import img3 from '../../Assets/img/3left.png'
import img4 from '../../Assets/img/4left.png'
import img5 from '../../Assets/img/5left.png'
import img6 from '../../Assets/img/6left.png'
import img7 from '../../Assets/img/7left.png'
import img8 from '../../Assets/img/8left.png'
import Nav from "../Nav/nav";
import Home2 from "../S2/home2";
import Home3 from "../S3/home3";
import Home4 from "../S4/home4";
import Home5 from "../S5/home5";
import Home6 from "../S6/home6";
import Home7 from "../lastS/home7";


export default function Home() {
    return (
        <>
            <Nav />
            <section className='home py-[100px]'>
                <div className='container w-[1360px] mx-auto '>
                    <div className="content flex ">
                        <div>
                            <h1 className="text-[55px] font-[700] bg-clip-text text-transparent ">Find the right <br /> community for you</h1>
                            <p className='font-[700] text-[22px] leading-[34px] mt-2 '>Your new social life, <br /> We help people connect with the <br /> right communities for them</p>
                            <div className='flex gap-4 text-[30px] font-[700] mt-14 '>
                                <Link to='/sign-in' className='bg-gradient-to-r from-[#0053B5] to-[#018DFF] text-white py-[4px] text-[26px] px-[50px] rounded-[15px]   '>sign in</Link>
                                <Link to='/sign-up' className='color2 bg-clip-text text-transparent bg-transparent border-[#018DFF] text-[26px] border-[2px] py-[4px] px-[50px] rounded-[15px] '>sign up</Link>
                            </div>
                            <div className="text-[40px] mt-20 flex gap-7 ms-7">
                                <HiMail />
                                <GrFacebookOption />
                                <AiOutlineInstagram />
                                <AiOutlineTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>

                        <div className="imgs flex flex-wrap relative top-[-60px] right-[-300px] h-[580px] overflow-hidden  ">
                            <div className="animate1 ">
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img1} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img2} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img3} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img6} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img5} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img6} alt="" />
                                <img className="w-[189px] h-[190px] objeobject-cover " src={img1} alt="" />
                            </div>
                            <div className="animate2 ">
                                <img className="w-[189px] h-[190px] object-cover " src={img7} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img8} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img5} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img1} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img4} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img8} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img5} alt="" />
                            </div>
                            <div className="animate1">
                                <img className="w-[189px] h-[190px] object-cover " src={img2} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img6} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img5} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img4} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img2} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img7} alt="" />
                                <img className="w-[189px] h-[190px] object-cover " src={img3} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-fit mt-5">
                        <img src={scroll} alt="" />
                        <div>
                            <img className="absolute left-[50%] top-[800px] translate-x-[-100%] " src={vactor} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Home2 />
            <Home3 img={group1} title={"An easy and effortless way to connect with your community"} desc={"You can easily communicate with your team in different ways, You can create manage and edit whatever you want within the community."} />
            <Home4 />
            <Home3 img={group3} title={"Are you ready to find the right community for you"} desc={"Search in any field you are interested in, by searching on the search page you can discover a lot of communities suitable for you"} />
            <Home5 />
            <Home6 />
            <Home7 />
        </>    
    )
}