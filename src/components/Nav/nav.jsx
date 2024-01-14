import { Link } from "react-router-dom"
import logo22 from "../../Assets/img/سس 1.png"
export default function Nav() {
    return (
        <nav className="mt-6 ">
            <div className="container w-[1360px] mx-auto ">
                <div className="content flex items-center justify-between ">
                    <div className="img">
                        <Link to='/'>
                            <img src={logo22} alt="wdas" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex items-center font-[700] gap-8 text-[21px] leading-[40px]   ">
                            <li><Link className="changecolor relative bg-clip-text text-transparent pb-1 after:absolute after:bg-gradient-to-r from-[#0053B5] to-[#038BFC] after:w-full after:h-[4px] after:bottom-0 after:left-0 after:rounded-md ">START</Link></li>
                            <li><Link className=" ">FEATURES</Link></li>
                            <li><Link className="">ABOUT US</Link></li>
                            <li><Link className="me-52 ">CONTACT</Link></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </nav>
    )
}