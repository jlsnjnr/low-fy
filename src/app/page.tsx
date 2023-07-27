"use client";

import { UserConfig } from "./components/userConfig";
import { Header } from "./components/header";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/163/227/original/augustin-cart-gif-lofi-final.gif?1636484521')] relative">
      <Header />
      <UserConfig />
    </main>
  );
};

export default Home;
