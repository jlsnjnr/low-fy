import { Tooltip } from "@nextui-org/react";
import { FiCamera, FiFilter, FiSliders, FiTool } from "react-icons/fi";

export const UserConfig = () => {
  return (
    <section className="absolute bottom-5 items-center justify-between bg-[hsla(0,0%,7%,.75)] flex w-60 h-[50px] rounded-lg px-12 border border-[hsla(0,0%,100%,.1)] md:right-7 md:flex-col md:w-[40px] md:h-60 md:py-7 md:translate-y-1/2 md:bottom-1/2 md:px-6">
      <Tooltip
        placement="leftEnd"
        content="Mixer"
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <div>
          <FiSliders color="white" />
        </div>
      </Tooltip>

      <Tooltip
        placement="leftEnd"
        content={"Templates"}
        color={undefined}
        contentColor={undefined}
        css={undefined}
      >
        <button>
          <FiFilter color="white" />
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
