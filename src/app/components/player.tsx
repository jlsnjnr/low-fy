import { FiFastForward, FiPause, FiRewind, FiVolume2 } from "react-icons/fi";

export const Player = () => {
  return (
    <div className="flex items-center justify-between px-1 bg-[hsla(0,0%,7%,.75)] h-10 rounded-md gap-3 md:w-44 md:px-5">
      <button>
        <FiRewind color="white" size={16} />
      </button>

      <button>
        <FiPause color="white" size={16} />
      </button>

      <button>
        <FiFastForward color="white" size={16} />
      </button>

      <button>
        <FiVolume2 color="white" size={16} />
      </button>
    </div>
  );
};
