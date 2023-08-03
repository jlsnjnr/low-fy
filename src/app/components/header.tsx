import { FiMenu, FiVolumeX } from "react-icons/fi";

import { Clock } from "./clock";
import { Player } from "./player";
import { Switch } from "./switch";

export const Header = () => {
  const now = new Date();

  return (
    <section className="flex items-center px-5 gap-3 md:gap-3 mt-16 md:mt-5 md:justify-between">
      <div className="border border-[hsla(0,0%,100%,.1)] w-16 h-8 p-5 flex items-center justify-center bg-[hsla(0,0%,7%,.75)] rounded-md">
        <Clock time={now.getTime()} />
      </div>

      <div className="hidden md:block">
        <Switch />
      </div>

      <Player />

      <div className="bgVolume px-5 border border-[hsla(0,0%,100%,.1)]">
        <button>
          <FiVolumeX color="white" size={16} />
        </button>
      </div>
    </section>
  );
};
