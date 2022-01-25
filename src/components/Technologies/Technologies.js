import React from 'react';
import { DiAndroid, DiFirebase, DiMongodb, DiNodejs, DiPhonegap, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, LeftSection } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id ="tech">

  <SectionDivider />
  
<br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    <li><ListTitle>Programming Languages:</ListTitle> C, Java, Python.</li>
<li><ListTitle>Web Development and Framework:</ListTitle> HTML,
CSS, JavaScript, PHP, Bootstrap, Django.</li>
<li><ListTitle>DevOps:</ListTitle>Basic knowledge about
Docker, Containers.</li>
<li><ListTitle>Databases:</ListTitle> MySQL, MongoDB , SQL Lite.
</li>
<li><ListTitle>Tools/IDE:</ListTitle> CodeBlocks, Anaconda, VSCode,
Sublime, phpMyAdmin, AndroidStudio, Keil.</li>
<li><ListTitle>Cloud Platforms:</ListTitle> GitHub, Heroku.</li></SectionText>
   
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>
        Front-End
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        React 
      </ListParagraph>
    </ListContainer>
      
      </ListItem>
      <ListItem>
    <DiNodejs size="3rem" />
    <ListContainer>
      <ListTitle>
        Back-End
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        Node
      </ListParagraph>
    </ListContainer>
      
      </ListItem>
      <ListItem>
    <DiMongodb size="3rem" />
    <ListContainer>
      <ListTitle>
        Databases
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        Mongo
      </ListParagraph>
    </ListContainer>
      
      </ListItem>
      <ListItem>
    <DiZend size="3rem" />
    <ListContainer>
      <ListTitle>
        UI / UX
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        Mongo
      </ListParagraph>
    </ListContainer>
      
      </ListItem>
      <ListItem>
    <DiAndroid size="3rem" />
    <ListContainer>
      <ListTitle>
        Mobile
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        Android Studio
      </ListParagraph>
    </ListContainer>
      
      </ListItem>
</List>
    

</Section>


);

export default Technologies;
