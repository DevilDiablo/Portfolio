import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "15+", text: 'Projects'},
  { number: "5+", text: "IDE'S Known", },
  { number: "4+", text: 'Domains', },
  { number: "3+", text: 'Languages', }
];

const Acomplishments = () => (
 <Section>
   <SectionDivider />
   <br />
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card,index) =>
     (
       <Box key={index}>
         <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText>
       </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
