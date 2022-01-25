import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './AboutStyles';

const About = () => {
  return (
      <Section row nopadding id="about">
               <SectionDivider />

   <LeftSection>
     <SectionTitle main center>
     About Me
     </SectionTitle>
     <SectionText>
       {/* what projects i can help build */}
       I am a technophile, aim to attain a responsible position where I can showcase my talent.
        Seeking to put proven skills in process with knowledge of latest technologies .
     </SectionText>
     <Button onClick={ ()=> window.location = "#head" }>  Learn More</Button>
   </LeftSection>

 </Section>
    

    
  );
};

export default About;