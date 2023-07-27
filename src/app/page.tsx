import { FiFilter, FiCamera, FiTool,FiMoon, FiPause, FiRewind, FiFastForward, FiSliders, FiVolume2, FiVolumeX, FiMenu } from "react-icons/fi";
// @ts-ignore
import { Clock } from "./components/Clock";

const Home = () => {
  const now = new Date()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/163/227/original/augustin-cart-gif-lofi-final.gif?1636484521')] relative">

      {/* top */}
      <section className="flex items-center gap-6 mt-5 md:ml-auto md:mr-7">
        
        <div 
          className='w-16 h-10 flex items-center justify-center bg-[hsla(0,0%,7%,.75)] rounded-md'
        >
          <Clock time={now.getTime()} />
        </div>

        {/* switch */}
        <div className="flex items-center justify-between bg-[hsla(0,0%,7%,.75)] w-14 px-1 h-8 rounded-full">
          <div className="w-6 h-6 rounded-full bg-white" />

          <FiMoon color="white" size={16} />
        </div>  

        <div className="flex items-center justify-between px-1 bg-[hsla(0,0%,7%,.75)] h-10 rounded-md gap-3">
          <FiRewind color="white" size={16} />
          <FiPause color="white" size={16} />
          <FiFastForward color="white" size={16} />
          <FiVolume2 color="white" size={16} />
        </div>  

        <div className="flex items-center justify-between px-1 bg-[hsla(0,0%,7%,.75)] h-10 rounded-md">
          <FiVolumeX color="white" size={16} />
        </div>  

        <div className="flex items-center justify-between px-1 bg-[hsla(0,0%,7%,.75)] h-10 rounded-md">
          <FiMenu color="white" size={16} />
        </div>  

      </section>


      {/* bottom */}
      <section 
        className='
          absolute bottom-5 items-center justify-between bg-[hsla(0,0%,7%,.75)] flex w-60 h-[50px] rounded-lg px-12 border border-[hsla(0,0%,100%,.1)] 
          md:right-7 md:flex-col md:w-[44px] md:h-60 md:py-7 md:translate-y-1/2 md:bottom-1/2 md:px-8'> 
        <FiSliders  color="white"/>
        <FiFilter color="white" />
        <FiCamera color="white" />
        <FiTool  color="white"/>
      </section>

    </main>
  )
}

export default Home;