import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To <br />
       Khader's Portfolio
     </SectionTitle>
     <SectionText>
       {/* what projects i can help build */}
       I am a technophile, aim to attain a
       responsible position where I can showcase
      my talent. Seeking to put proven skills in
process with knowledge of latest technologies .
     </SectionText>
     <Button onClick={ ()=> window.location = "http://google.com" }>  Learn More</Button>
   </LeftSection>

 </Section>
);

export default Hero;