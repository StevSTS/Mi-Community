import icon1 from '../../Assets/img/communication.png'
import icon2 from '../../Assets/img/message.png'
import icon3 from '../../Assets/img/location.png'
export default function Home2 () {
    return (
        <section className="home2 pt-[150px] mt-32 ">
            <div className="container">
                <div className="text-center  ">
                    <h3 className="bg-clip-text text-transparent text-[45px] font-[700] mb-3  ">Core Features</h3>
                    <p className='text-[22px] font-[700] text-[#3D4653]'>You will learn the problems that Subsocial Network is trying to <br /> solve, a description of existing features</p>
                </div>
                <div className="content flex items-center justify-center gap-[80px] mt-14 ">
                    <div className='box1 bg-gradient-to-r from-[#0156B9] to-[#028AFB] text-white w-[340px]  h-[320px] text-center p-3 rounded-[57px] '>
                        <img className='w-[300px] h-[172px] object-cover mx-auto ' src={icon1} alt="" />
                        <h4 className='font-400 text-[30px] '>community</h4>
                        <p>community is one of the factors affecting mental health without social relations the human collapses physically and morally.</p>
                    </div>
                    <div className='box2 bg-gradient-to-l from-[#394456] to-[#141B25] w-[340px] text-whit text-white h-[320px]  text-center p-3 rounded-[57px] '>
                        <img className='w-[300px] h-[172px] object-cover  ' src={icon2} alt="" />
                        <h4 className='font-400 text-[30px] '>messages</h4>
                        <p>A way to get to know each other and make new friends to sharedaily life.</p>
                    </div>
                    <div className='box3 bg-gradient-to-l from-[#394456] to-[#141B25] w-[340px] text-whit  text-white h-[320px] text-center p-3 rounded-[57px] '>
                        <img className='  mx-auto object-cover '  src={icon3} alt="" />
                        <h4 className='font-400 text-[30px] '>Places</h4>
                        <p>to facilitate access to mmany people and be opennes to new ideasand help to present thought.</p>
                    </div>
                </div>
                <div className="title text-center mt-32 font-[700] w-[700px] mx-auto ">
                    <h4 className="bg-clip-text text-transparent text-[45px] mb-3 ">About us</h4>
                    <p className="text-[26px] font-[700]  ">It is a social network to allow people to communicate. Post updates and respond to others' posts.</p>
                </div>
            </div>
        </section>
    )
}