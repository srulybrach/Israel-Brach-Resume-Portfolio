import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { HiOutlineDatabase } from 'react-icons/hi';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => {
  return (
    <Section id='technologies'>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I create apps with a range of front-end and back-end technologies.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <HiOutlineDatabase size='3rem' />
            <br />
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              <li>Java</li>
              <li>.NET</li>
              <li>MySQL</li>
              <li>Python</li>
              <li></li>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <CgWebsite size='3rem' />
            <br />
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              <ul className='skills-list'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6)</li>
                <li>React.js</li>
                <li>jQuery</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <FaCodeBranch size='3rem' />
            <br />
            <ListTitle>Tools</ListTitle>
            <ListParagraph>
              <ul>
                <li>Git</li>
                <li>Bootstrap</li>
                <li>Gradle</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default Technologies;
