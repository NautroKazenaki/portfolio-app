import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFrown } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telegram</LinkTitle>
          <LinkItem href='@NautroKazenaki'>@NautroKazenaki</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Звоночек</LinkTitle>
          <LinkItem href='tel:89117276506'>89117276506</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href='mailto:kalliak2014@yandex.ru'>kalliak2014@yandex.ru</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>На данный момент ищу вакансию JS React developer на позицию inter/junior</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/NautroKazenaki">
          <AiFillGithub size="3rem" /> 
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/naurtokazenaki/">
          <AiFillInstagram size="3rem" /> 
        </SocialIcons>
        <SocialIcons href="https://vk.com/id151246154">
          <AiFillFrown size="3rem" /> 
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
