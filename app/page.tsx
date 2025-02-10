import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <main className="flex flex-col items-center justify-between">
      <Navbar  />
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-black/20 z-20 w-full h-[960px]"></div>
        
      </div>
    </main>
    </> 
  );
}
