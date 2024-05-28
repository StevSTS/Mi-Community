
export default function Home3 (props) {
    return (
        <div className="home3 my-32 ">
            <div className="container mx-auto">
                <div className='content flex items-center justify-around '>
                    <div className='img'>
                        <img className='w-[550px]' src={props.img} alt="" />
                    </div>
                    <div className='title w-[740px]  '>
                        <h5 className='text-[40px] font-[700] mb-10 bg-clip-text text-transparent '>{props.title}</h5>
                        <p className='text-[28px] font-[600] leading-[50px] '>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}