import React from 'react';
import { DiCodeBadge, DiReact, DiStylus } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
     <SectionDivider />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       Я стараюсь пробовать много разных инструментов для создания приложений, но в основном это: 
     </SectionText>
     <List>
       <ListItem>
         <DiReact  size="3rem"/>
         <ListContainer>
           <ListTitle> Front-End </ListTitle>
           <ListParagraph>
            Использую: <br />
             JavaScript - основной язык <br />
             React - framework <br />
             Redux - для управления state <br />
             TypeScript - дополнительный язык, на который стараюсь пересесть <br />
             Axios - для rest запросов <br />
             Jest - для тестирования
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiCodeBadge  size="3rem"/>
         <ListContainer>
           <ListTitle> Back-End </ListTitle>
           <ListParagraph>
             Использую: <br />
             Node <br />
             Express <br />
             Request-Promise
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiStylus  size="3rem"/>
         <ListContainer>
           <ListTitle> UI/UX </ListTitle>
           <ListParagraph>
             Использую для создания интерфейса: <br />
             Ant design <br />
             Material UI  
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
  </Section>
);

export default Technologies;
