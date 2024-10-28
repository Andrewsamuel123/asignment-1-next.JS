import Navbar from "./component/Navbar";
import Image from "next/image";
import spiderman from "../../image/spiderman.jpg"
import moviepic from "../../image/movie pic.webp"
import galaxy from "../../image/galaxy.jpg"
import webpic1 from "../../image/webpic1.png"

export default function Home() {
  return (
    <div>
        <h1 className="flex items-center text-center justify-center text-4xl bg-gray-950 text-white">MoViEs HuB </h1>
        <Image src ={webpic1} alt =  "webpic" className=" w-[1650px] h-[660px] "  />
    </div>
  );
}



