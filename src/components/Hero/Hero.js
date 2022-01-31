import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Всем привет, <br />
        Я - Nautro Kazenaki <br />
        и Я - React developer!
      </SectionTitle>
      <SectionText>
        Здесь можно найти всю необходимую информацию обо мне,<br />
        мои pet-проекты, часто используемый stack <br />
        а если хочется покликать, то сюда ↓
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/NautroKazenaki"}>Это тут!</Button>
    </LeftSection>
  </Section>
);

export default Hero;