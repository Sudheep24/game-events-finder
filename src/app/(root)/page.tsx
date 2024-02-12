import Image from "next/image";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { HeroSection } from "@/components/shared/HeroSection";
import { About } from "@/components/shared/About";
import {Games} from "@/components/shared/Games";



export default function Home() {
  
  return (
    <main className="">
      
      <HeroSection/>
      <About/>
      <Games/>
      
    </main>
  );
}
