import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import About from '../components/About/About';
import Education from '../components/Education/Education';


import { Layout } from '../layout/Layout';
import { Section, SectionDivider } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      {/* <Section grid> */}
      <Technologies />
      {/* <BgAnimation /> */}
      {/* </Section> */}
       <Section grid>

       <About />
       <img style={{width:"350px",height:"350px",alignSelf:"center",marginLeft:"50px" }} src="images/34m.png" alt="Avatar" />  
           </Section>
           <Timeline />

           <Education />


     
      <Acomplishments />
    </Layout>
  );
};

export default Home;
