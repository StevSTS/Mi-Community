import saly from '../../Assets/img/Saly-1.png'
import door1 from '../../Assets/img/1door.png'
import door3 from '../../Assets/img/3door.png'

import location from '../../Assets/img/location.png'
import polygon from '../../Assets/img/Polygon 5.png'
import vector from '../../Assets/img/Vector 34.png'


export default function Home6 () {
    return (
        <section className="home6">
            <div className="container mx-auto">
                <div className="content flex items-center ">
                    <div className="img">
                        <img className='w-[760px] ' src={saly} alt="img" />
                    </div>
                    <div className='title text-center '>
                        <h5 className='text-[45px] font-[700] bg-clip-text text-transparent '>Find the right community for you</h5>
                        <p className='text-[35px] font-[600] '>Facilitating access to many people from <br /> all places and meeting friends</p>
                        <div className='boxs ms-14'>
                            <div className='box1  bg-[#131A24] rounded-[100px] h-[110px] my-8 flex items-center w-[600px] '>
                                <div className='relative'>
                                    <img className='ms-7  mb-1 ' src={door1} alt="" />
                                    <img className='absolute z-[2] top-[46px] left-[53px] ' src={door3} alt="" />
                                </div>
                                <p className='text-white font-[700] text-[26px] ms-14 '>Easy and distinctive home page</p>
                            </div>
                            <div className='bo21 relative bg-[#131A24] rounded-[100px] h-[110px] my-8 flex items-center w-[600px] '>
                                <div>
                                    <img className='w-[90px] ms-3 mb-3 ' src={location} alt="" />
                                </div>
                                <p className='text-white font-[700] text-[26px] ms-14 '>Find the best places on the map</p>
                            </div>
                            <div className='box3 relative bg-[#131A24] rounded-[100px] h-[110px] my-8 flex items-center w-[600px] '>
                                <div className='relative'>
                                    <img className='ms-5 mb-2' src={polygon} alt="" />
                                    <img className='absolute top-[-3px] left-20 ' src={vector} alt="" />
                                </div>
                                <p className='text-white font-[700] text-[26px] ms-14 '>The best social life experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}