import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillMail } from 'react-icons/ai';
import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';


import { SocialIcons,Span } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
       <LinkList>
          <LinkColumn>
              <LinkTitle>
                Call</LinkTitle>
                <LinkItem href='tel:111-111-1111' >111-111-1111</LinkItem>
                </LinkColumn>
                <LinkColumn>
                <LinkTitle>
                Mail</LinkTitle>
                <LinkItem href='mailto:khaderwaliafghan@gmail.com' >khaderwaliafghan@gmail.com</LinkItem>
     
          </LinkColumn>
       </LinkList>
       <SocialIconsContainer>
         <CompanyContainer>
         <Link href ="/" >
     <a style={{display : "flex",alignItems:"center",color:'white' }}>
       <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
     </a>
     </Link>
            <Slogan>Innovating one project at a time</Slogan>
         </CompanyContainer>
         <SocialContainer>
         <SocialIcons href='https://github.com'>
       <AiFillGithub size="3rem" />
     </SocialIcons>

     
     <SocialIcons href='https://linkedin.com'>
       <AiFillLinkedin size="3rem" />
     </SocialIcons>
     
     <SocialIcons href='https://instagram.com'>
       <AiFillInstagram size="3rem" />
     </SocialIcons>

     <SocialIcons href='https://gmail.com'>
       <AiFillMail size="3rem" />
     </SocialIcons>
     </SocialContainer>
         
       </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
