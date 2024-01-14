import { BsLinkedin } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import { GrMail } from "react-icons/gr"; 
import logo from '../../Assets/img/سس 1.png'

export default function Home7() {
    return (
        <section className="home7">
            <div className="container">
                <div className="content relative flex justify-between items-center ">

                    <div className="contact-us ms-16">
                        <img className='mb-14' src={logo} alt="logo" />
                        <h6 className='relative text-[50px] font-[700] text-[#222831] mb-5 pb-3 after:absolute after:w-[150px] after:bg-[#222831] after:h-[4px] after:bottom-0 after:left-0  '>Contact Us</h6>
                        <p className='text-[30px] text-[#393E46] font-[600] '>Feel free yo contact us any time , we will get <br /> back to you as soon as we can!</p>
                        <form action="#" className='mt-10'>
                            <div>
                                <input required className='placeholder:text-[#393E46] placeholder:text-[18px] placeholder:font-[600] border-b-[4px] border-[#393E46] outline-none pb-2 w-[560px] ' type="text" placeholder='Name' />
                            </div>
                            <div>
                                <input required className='placeholder:text-[#393E46] placeholder:text-[18px] placeholder:font-[600] border-b-[4px] border-[#393E46] outline-none pb-2 w-[560px] my-16 ' type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input required className='placeholder:text-[#393E46] placeholder:text-[18px] placeholder:font-[600] border-b-[4px] border-[#393E46] outline-none pb-2 w-[560px] ' type="text" placeholder='Message' />
                            </div>
                            <button className='bg-gradient-to-r from-[#0156B9] to-[#028AFB] text-white rounded-[14px] tracking-[16px] text-[25px] font-[700] py-4 px-[214px] mt-12' type='submit'>SEND</button>
                        </form>
                    </div>
                    <div className='info bg-[#131A24] text-white ps-20 py-14 w-[760px] after:absolute after:bg-[#0053B5] after:w-[600px] after:h-[850px] after:top-0 after:right-0 after:z-[-1] '>

                        <div className="after:bg-[#0053B5] after:absolute after:w-[77px] after:h-[77px] after:top-10 after:right-[720px] ">
                            <h6 className='text-[40px] font-[700] mb-10 '>Info</h6>
                            <div className="icons text-[45px]">
                                <div className="flex items-center gap-8 mb-10">
                                    <GrMail />
                                    <p className="text-[30px]">hicommunity@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-8 mb-10">
                                    <CgFacebook />
                                    <p className="text-[30px]">hicommunity@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-8 mb-10">
                                    <AiOutlineTwitter />
                                    <p className="text-[30px]">hicommunity@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-8 mb-10">
                                    <BsLinkedin />
                                    <p className="text-[30px]">hicommunity@gmail.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}