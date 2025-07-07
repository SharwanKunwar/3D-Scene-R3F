import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Myscene from "./components/Myscene";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="w-screen h-screen">
      <Canvas>
      <Myscene/>
    </Canvas>
    </div>
    </>
  );
}
