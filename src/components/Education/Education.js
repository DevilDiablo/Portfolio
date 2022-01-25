import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ListTitle } from './EducationStyles';

const Education = () => {
  return (
      <Section>
      <Section row nopadding id="edu">
   <LeftSection>
     <SectionTitle main center>
     Education
     </SectionTitle>
     <ListTitle>Graduation: KLE Technological University</ListTitle>
     <SectionText>
       {/* what projects i can help build */}
       KLE Technological University (KLE Tech) has its roots in B. V. Bhoomaraddi 
       College of Engineering and Technology, Hubli (BVB), one of the premier engineering institutions of Karnataka. 
       The founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an institution that would lay the foundation 
       of modern engineering education in northern region of Karnataka.
     </SectionText>
     <Button onClick={ ()=> window.location = "#head" }>  Learn More</Button>
   </LeftSection>
   <img style={{width:"600px",height:"450px",alignSelf:"center",marginLeft:"50px" }} src="images/bbvb.jpg" alt="Avatar" />  
 </Section>

 <Section  row nopadding >
   <LeftSection>
     
     <ListTitle>Diploma: K.L.E.SOCIETY'S
Smt. Chanabasamma Ishwarappa Munavalli Polytechnic</ListTitle>
     <SectionText>
       {/* what projects i can help build */}
       K. L. E. Society's Smt. Chanabasamma Ishwarappa Munavalli Polytechnic, 
       HUBLI was established in the year 1984 by prestigious educational society of South India,
        the KARNATAKA LINGAYAT EDUCATION SOCIETY, BELGAUM. The college is situated on Pune -
         Bangalore National Highway, adjacent to several prominent education institutions. 
         The area is called Vidyanagar, owing to the most conducive atmosphere prevalent for academic perseverance.
          The college is housed in an imposing building with all the modern architecture and lush green lawns on its campus.
     </SectionText>
     <Button onClick={ ()=> window.location = "#head" }>  Learn More</Button>
   </LeftSection>
   <img style={{width:"600px",height:"450px",alignSelf:"center",marginLeft:"50px" }} src="images/kle11.jpg" alt="Avatar" />  
 </Section>

 <Section  row nopadding >
   <LeftSection>
     
     <ListTitle>School: Basel Mission English Medium High School</ListTitle>
     <SectionText>
       {/* what projects i can help build */}
       BASEL MISSION ENGLISH MEDIUM SCHOOL DHARWAD was established in 1973 and it is managed by the Pvt. 
       Unaided. It is located in Urban area. It is located in DHARWAD CITY block of DHARWAD district of Karnataka.
        The school consists of Grades from 1 to 10. The school is Co-educational and it have an attached pre-primary section. 
        The school is N/A in nature and is not using school building as a shift-school. English is the medium of instructions in this school. </SectionText>
     <Button onClick={ ()=> window.location = "#head" }>  Learn More</Button>
   </LeftSection>
   <img style={{width:"600px",height:"450px",alignSelf:"center",marginLeft:"50px" }} src="images/basel.jpg" alt="Avatar" />  
 </Section>

 </Section>

    
  );
};

export default Education;