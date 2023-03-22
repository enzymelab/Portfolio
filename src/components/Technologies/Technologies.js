import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, Progressbar, SectionTitle, Progressbarspan } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <p><br /></p>
    <SectionTitle>My Skills</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            90%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="90%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            90%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="90%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            75%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="75%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            70%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="70%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>
            80%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="80%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            70%
          </ListParagraph>
          <Progressbar >
            <Progressbarspan width="70%"></Progressbarspan>
          </Progressbar>
        </ListContainer>
      </ListItem>
    </List>


  </Section >
);

export default Technologies;
