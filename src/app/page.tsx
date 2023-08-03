"use client";

import { UserConfig } from "./components/userConfig";
import { Header } from "./components/header";

const Home = () => {
  let img =
    "bg-[url('https://cdnb.artstation.com/p/assets/images/images/029/539/383/original/kelly-roake-brassey-garden-min.gif?1597866294')]";

  return (
    <main
      className={`flex h-screen flex-col items-center justify-between bg-no-repeat relative bg-cover ${img}`}
    >
      <Header />
      <UserConfig />
    </main>
  );
};

export default Home;
