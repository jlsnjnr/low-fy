"use client";

import { UserConfig } from "./components/userConfig";
import { Header } from "./components/header";
import { useState } from "react";

const Home = () => {
  const selectImage = [
    {
      id: 1,
      url: "https://cdnb.artstation.com/p/assets/images/images/002/216/821/original/leon-tukker-jellyprogress1.gif?1458823918",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/originals/67/9a/cf/679acfc168d0846ab8834d5ef7735038.gif",
    },
    {
      id: 3,
      url: "https://gifdb.com/images/high/lofi-girl-window-stars-clouds-h8nowehhkwqpxtfr.gif",
    },
    {
      id: 4,
      url: "https://cdnb.artstation.com/p/assets/images/images/029/539/383/original/kelly-roake-brassey-garden-min.gif?1597866294",
    },
    {
      id: 5,
      url: "https://cdnb.artstation.com/p/assets/images/images/035/834/987/original/jordan-pak-lofi.gif?1616014770",
    },
  ];

  const [image, setImage] = useState(selectImage[0].url);

  let img = `bg-[url('${selectImage[0].url}')]`;
  console.log(img);

  const selectBg = (value: any) =>
    selectImage.filter((selected) => selected.id === value);

  return (
    <main
      className={`flex h-screen flex-col items-center justify-between bg-no-repeat relative bg-cover`}
    >
      <Header />
      <UserConfig selectBg={selectBg} selectImage={selectImage} />
    </main>
  );
};

export default Home;
