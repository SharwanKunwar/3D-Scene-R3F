'use client';

import { Canvas } from "@react-three/fiber";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Html } from "@react-three/drei"; // ✅ IMPORTANT: Add this!

const Myscene = dynamic(() => import("../components/Myscene"), { ssr: false });

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
    <div className="w-screen h-screen">
      <Canvas>
        <Suspense
          fallback={
            <Html center>
              <div className="text-white text-lg bg-black  rounded flex justify-center items-center">
                <p className="w-[300px] h-[100px] py-2 px-10">Wait a sec, it will render soon...</p>
              </div>
            </Html>
          }
        >
          <Myscene />
        </Suspense>
      </Canvas>
    </div>
  );
}
