"use client";

import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import {
  FiCamera,
  FiSliders,
  FiTool,
  FiX,
  FiTwitter,
  FiVolume,
  FiVolume2,
  FiClock,
} from "react-icons/fi";
import Draggable from "react-draggable";

const Mixer = ({ setMixerActive }: any) => {
  const [volume, setVolume] = useState(1);

  return (
    <Draggable cancel=".no-drag">
      <div className="absolute left-0 bottom-16 md:right-16 md:left-auto md:bottom-auto md:top-0 w-60 bg-[hsla(0,0%,7%,.75)] md:w-[230px] rounded-lg p-3 cursor-move border border-[hsla(0,0%,100%,.1)]">
        <button
          className="absolute right-2 top-2.5 no-drag"
          onClick={() => setMixerActive(false)}
        >
          <FiX color="white" />
        </button>

        <div className="flex flex-col mt-3">
          <span className="text-white text-sm pb-1">Volume da música</span>
          <div className="bg-[hsla(0,0%,100%,.05)] w-full rounded-md p-2 no-drag">
            <div className="flex justify-between items-center cursor-pointer py-1">
              <FiVolume color="white" size={24} />
              <input
                min={1}
                max={2}
                step={0.02}
                type="range"
                value={volume}
                onChange={(event) => {
                  setVolume(event.target.valueAsNumber);
                }}
                className="w-full bg-white h-3 mx-2 rounded-md"
              />
              <FiVolume2 color="white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export const UserConfig = () => {
  const [mixerActive, setMixerActive] = useState(false);

  return (
    <section className="absolute bottom-12 items-center justify-between bg-[hsla(0,0%,7%,.75)] flex w-60 h-[50px] rounded-lg px-12 border border-[hsla(0,0%,100%,.1)] md:right-7 md:flex-col md:w-[40px] md:h-60 md:py-7 md:translate-y-1/2 md:bottom-1/2 md:px-6">
      {mixerActive && <Mixer setMixerActive={setMixerActive} />}

      <Tooltip
        placement="leftEnd"
        content="Mixer"
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <button onClick={() => setMixerActive(true)}>
          <FiSliders color="white" />
        </button>
      </Tooltip>

      <Tooltip
        placement="leftEnd"
        content={"Pomodoro"}
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <button>
          <FiClock color="white" />
        </button>
      </Tooltip>

      <Tooltip
        placement="leftEnd"
        content={"Fundos"}
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <button>
          <FiCamera color="white" />
        </button>
      </Tooltip>

      <Tooltip
        placement="leftEnd"
        content={"Configurações"}
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <button>
          <FiTool color="white" />
        </button>
      </Tooltip>
    </section>
  );
};
