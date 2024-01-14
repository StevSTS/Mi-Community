import { Link } from "react-router-dom";
import mask from '../../Assets/img/Mask group.png'
import mask1 from '../../Assets/img/Mask group (1).png'
import mask2 from '../../Assets/img/Mask group (2).png'
import mask3 from '../../Assets/img/Mask group (3).png'
import mask4 from '../../Assets/img/Mask group (4).png'
import mask5 from '../../Assets/img/Mask group (5).png'
import Ellipse19 from '../../Assets/img/Ellipse 19.png'
import Ellipse20 from '../../Assets/img/Ellipse 20.png'
export default function Home5() {
    return (
        <section className="home5 relative my-96 ">
            <div className="container">
                <div className="title text-center mx-auto">
                    <p className="font-[700] text-[35px] mb-10 ">Whatever community you're about to create, <br /> we've have solutions for you. Start Socialize today.</p>
                    <Link className="bg-gradient-to-r from-[#0156B9] to-[#028AFB] text-[20px] text-white py-[10px] px-[50px] rounded-[35px] ">create now</Link>
                </div>
                <div className="photos">
                    <img className="w-[260px] absolute top-[-280px] left-[200px] " src={mask} alt="" />
                    <img className="w-[260px] absolute top-[100px] left-[50px] " src={mask1} alt="" />
                    <img className="w-[260px] absolute top-[280px] left-[450px] " src={mask2} alt="" />
                    <img className="w-[260px] absolute top-[280px] right-[300px] " src={mask3} alt="" />
                    <img className="w-[260px] absolute top-[-220px] right-[50px] " src={mask4} alt="" />
                    <img className="w-[260px] absolute top-[-320px] right-[370px] " src={mask5} alt="" />
                    <img className="absolute top-[-120px] left-[40px] " src={Ellipse19} alt="" />
                    <img className="absolute top-[100px] right-[70px]  " src={Ellipse20} alt="" />
                </div>
            </div>
        </section>
    )
}