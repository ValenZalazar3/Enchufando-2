import Head from "next/head";
import { useEffect } from "react";
import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";

const Home = () => {
  useEffect(() => {
    const targetSection = localStorage.getItem("targetSection");
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
        localStorage.removeItem("targetSection");
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Enchufando</title>
        <meta
          name="description"
          content="Página oficial de Enchufando, la mejor fábrica de conexiones plásticas de la región."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="inicio">
        <Hero />
      </section>
      <section id="beneficios">
        <SectionTitle
          pretitle="Beneficios de Enchufando"
          title=" Porque elegirnos"
        >
          Enchufando abre sus puertas en el año 2006, y desde entonces se ha
          convertido en la fábrica de conexiones plásticas líder en Argentina.
          Nuestros productos son de la más alta calidad, y nuestra gestión es
          responsable y sostenible.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>
      <SectionTitle pretitle="Video de presentación" title="Nuestros comienzos">
        Mira nuestro video de presentación y conoce más sobre nuestra historia.
      </SectionTitle>
      <section id="video">
        <Video />
      </section>
      <SectionTitle pretitle="FAQ" title="Preguntas Frecuentes">
        Si tienes alguna duda, revisa nuestras preguntas frecuentes. Si no
        encuentras la respuesta que buscas, no dudes en contactarnos.
      </SectionTitle>
      <section id="preguntas">
        <Faq />
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
