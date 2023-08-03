import { FiMenu, FiVolumeX } from "react-icons/fi";

import { Clock } from "./clock";
import { Player } from "./player";
import { Switch } from "./switch";

export const Header = () => {
  const now = new Date();

  return (
    <section className="flex items-center px-5 gap-3 md:gap-3 mt-12 md:justify-between">
      <div className="w-16 h-8 flex items-center justify-center bg-[hsla(0,0%,7%,.75)] rounded-md">
        <Clock time={now.getTime()} />
      </div>

      <Switch />
      <Player />

      <div className="bgVolume">
        <button>
          <FiVolumeX color="white" size={16} />
        </button>
      </div>

      <div className="bgVolume">
        <button>
          <FiMenu color="white" size={16} />
        </button>
      </div>
    </section>
  );
};
