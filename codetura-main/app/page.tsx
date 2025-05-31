import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Solutions/>
      <About/>
      <Contact/>
    </>
  );
}
