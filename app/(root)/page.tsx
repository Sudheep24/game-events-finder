import Image from "next/image";

import Link from "next/link";

import { HeroSection } from "../../components/shared/HeroSection";
import { About } from "../../components/shared/About";
import { Games } from "../../components/shared/Games";
import { Button } from "../../components/ui/button";



export default function Home() {
  
  return (
    <main className="">
      
      <HeroSection/>
      <About/>
      <Games/>
      <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)' }}>
      <Link href={'/chatbox'}>
        <Button variant={"outline"} className="rounded-full bg-slate-100 text-blue-500">Chat</Button>
      </Link>
    </div>
      
    </main>
  );
}
