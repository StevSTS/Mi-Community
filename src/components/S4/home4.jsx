import group2 from '../../Assets/img/Group 91.png'

export default function Home4 () {
    return (
        <div className="home4 my-32 ">
            <div className="container">
                <div className='content flex items-center justify-around '>
                    <div className='ms-10'>
                        <h5 className='text-[40px] font-[700] mb-10 bg-clip-text text-transparent '>We believe that living together <br /> is better than living alone.</h5>
                        <p className='text-[28px] font-[600] leading-[50px] '>No matter what stage of life you're in, <br /> having friends to share. Find the right <br /> community for you</p>
                    </div>
                    <div className='img me-10'>
                        <img className='w-[580px]' src={group2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}