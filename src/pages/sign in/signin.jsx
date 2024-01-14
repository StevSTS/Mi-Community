import { BiChevronDown } from "react-icons/bi"; 
import { SiGmail } from "react-icons/si"; 
import { BsLinkedin } from "react-icons/bs"; 
import { ImFacebook2 } from "react-icons/im"; 
import signnin from '../../Assets/img/sign in up.png'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { AiOutlineEye } from "react-icons/ai";
import img7 from '../../Assets/img/img7.png'
<ImFacebook2 />
export default function Signin () {


    const img1move = useRef()
    const signin = useRef()
    const signup = useRef()




    
    function moveimg () {
        img1move.current.style.transform = "translateX(786px)"
        img1move.current.style.transitionDuration = "2s"
        img1move.current.style.transitionTimingFunction = "cubic-bezier(0.5,1.6,0.4,.7)"
        img1move.current.setAttribute("src" , `${img7}` )

        signin.current.style.opacity = "0"
        signin.current.style.transitionDuration = "1.5s"
        signup.current.style.opacity = "1"
        signup.current.style.transitionDuration = "1.5s"
    }

    function moveimg2 () {
        img1move.current.style.transform = "translateX(0px)"
        img1move.current.style.transitionDuration = "2s"
        img1move.current.style.transitionTimingFunction = "cubic-bezier(0.5,1.6,0.4,.7)"
        img1move.current.setAttribute("src" , `${signnin}` )
        signin.current.style.opacity = "1"
        signin.current.style.transitionDuration = "1.5s"
        signup.current.style.opacity = "0"
        signup.current.style.transitionDuration = "1.5s"
    }

    
        


    const currentLocation = useLocation();


    useEffect(() => {
    if (currentLocation.pathname === '/sign-up') {
        console.log('You are on the sign-up page.');
        moveimg();
    }
    }, [currentLocation.pathname]);





    return (
        <section>
            <div className="container">
                <div className='content flex justify-between '>
                    <div className="sign-up">
                        <div  className='imgs'>
                            <img ref={img1move}  className='absolute z-50 imgmoving  w-[692px] h-[900px] rounded-[15px] mt-5 ms-5 object-cover ' src={signnin} alt="" />
                        </div>
                        <div ref={signup} className="register relative top-[50px] left-[120px] text-center opacity-0 ">
                        <h2 className='bg-clip-text text-transparent text-[40px] font-[700]  '>Welcome to Hi Community</h2>
                        <p className='text-[24px] font-[400] mb-10 '>Register you account</p>
                        <form action="#">
                            <div>
                                <input className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-3 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="text" placeholder='Username' />
                            </div>
                            <div>
                                <input className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-3 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="email" placeholder='Email' />
                            </div>
                            <div className="relative">
                                <input className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-3 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="password" placeholder='Password' />
                                <div className="absolute top-[50%] translate-y-[-80%] right-[7%] text-[20px] ">
                                    <AiOutlineEye />
                                </div>
                            </div>
                            <div>
                                <input className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-3 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="text" placeholder='Date of Birth' />
                            </div>
                            <div className="relative">
                                <input className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-5 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="text" placeholder='Type' />
                                <div className="absolute top-[50%] translate-y-[-100%] right-[6%] text-[22px] ">
                                    <BiChevronDown />
                                </div>
                            </div>
                            <button className='shadow-[0_0px_25px_-0px_rgba(0,0,0,0.251)] bg-gradient-to-r from-[#0157B9] to-[#038AFB] text-white text-[22px] font-[600] py-[11px] px-56 rounded-[15px]'>Sign Up</button>
                            <div className="mt-2 text-[15px]  ">
                                <Link to='/sign-in' onClick={()=>{moveimg2()}}>Already have an account? <span className="Signin bg-clip-text text-transparent ">Sign in</span> </Link>
                            </div>
                        </form>
                            <div className='relative mt-12 '>
                                <div className='bg-gradient-to-r from-[#222831] to-[#22283100] w-[280px] h-[1.8px] absolute right-[-96px] top-[50%] translate-y-[-50%] '>
                                </div>
                                    <div className='bg-gradient-to-r from-[#22283100] to-[#222831] w-[300px] h-[1.8px] absolute left-[-120px] top-[50%] translate-y-[-50%] '>
                                    </div>
                                    <p>or connect with</p>
                            </div>
                            <div className='icons w-fit mx-auto mt-10 text-[#4f4d4de5] text-[25px] flex gap-10  '>
                                    <ImFacebook2 />
                                    <BsLinkedin />
                                    <SiGmail />
                            </div>
                        </div>
                    </div>


                    <div ref={signin} className='sign-in text mt-24 w-[820px] text-center '>
                        <div className="registry absolute top-8 right-8 ">
                            <Link to='/sign-up' onClick={()=>{moveimg()}}>Not a member? <span className="Register bg-clip-text text-transparent ">Register now</span></Link>
                        </div>
                        <h2 className='bg-clip-text text-transparent text-[50px]  '>Hello Again!</h2>
                        <p className='text-[24px] font-[400] mb-10 '>Welcome back you've been missed!</p>
                        <form action="#">
                            <div>
                                <input required className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-7 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="text" placeholder='Username' />
                            </div>
                            <div>
                                <input required className='border-[2px] border-[#222831] bg-[#e9e9e93f] ps-10 h-[67px] rounded-[15px] w-[550px] mb-14 placeholder:text-[#222831] placeholder:font-[400] hover:placeholder:text-[#0366CD] hover:border-[#0366CD] placeholder:delay-200 placeholder:duration-300 delay-200 duration-300  ' type="password" placeholder='Password' />
                            </div>
                            <button className='shadow-[0_0px_25px_-0px_rgba(0,0,0,0.251)] bg-gradient-to-r from-[#0157B9] to-[#038AFB] text-white text-[22px] font-[600] py-[11px] px-56 rounded-[15px]  '>Sign in</button>
                            <p className="mt-2 text-[14px]  ">Recovery Password</p>
                        </form>
                            <div className='relative mt-12 '>
                                <div className='bg-gradient-to-r from-[#222831] to-[#22283100] w-[328px] h-[1.8px] absolute right-0 top-[50%] translate-y-[-50%] '>
                                </div>
                                    <div className='bg-gradient-to-r from-[#22283100] to-[#222831] w-[300px] h-[1.8px] absolute left-0 top-[50%] translate-y-[-50%] '>
                                    </div>
                                    <p>or connect with</p>
                            </div>
                            <div className='icons w-fit mx-auto mt-10 text-[#4f4d4de5] text-[25px] flex gap-10  '>
                                    <ImFacebook2 />
                                    <BsLinkedin />
                                    <SiGmail />
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}