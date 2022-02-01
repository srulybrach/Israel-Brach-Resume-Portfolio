import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Technologies />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
