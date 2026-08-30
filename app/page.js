import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Countdown from "@/components/CountDown";
import Timeline from "@/components/timeline/TimeLine";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown/>
      <About/>
      <Timeline/>
      {/* Other sections */}
    </main>
  );
}