import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Comparison from "@/components/Comparison";
import Extension from "@/components/Extension";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Security />
        </Reveal>
        <Reveal>
          <Comparison />
        </Reveal>
        <Reveal>
          <Extension />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Cta />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
