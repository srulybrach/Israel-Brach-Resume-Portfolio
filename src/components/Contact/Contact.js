import React from 'react';
// icons for buttons
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './ContactStyles';

const links = {
  github: 'https://github.com/srulybrach',
  linkedin: 'https://www.linkedin.com/in/israel-brach-846689189/',
  email: 'mailto:srulybrach@gmail.com',
  resume: './pdf/resume.pdf',
};

// Future steps to load the buttons dynamically
const Contact = () => {
  return (
    <Section id='contact'>
      <SectionTitle>Contact</SectionTitle>
      <Boxes>
        <a href={links.github} target='_blank'>
          <Box id='github-box'>
            <AiFillGithub size='5rem' />
            <BoxText>Github</BoxText>
            <BoxText>srulybrach</BoxText>
          </Box>
        </a>
        <a href={links.linkedin} target='_blank'>
          <Box>
            <AiFillLinkedin size='5rem' />
            <BoxText>Linkedin</BoxText>
            <BoxText>Israel Brach</BoxText>
          </Box>
        </a>
        <a href={links.email} target='_blank'>
          <Box>
            <AiTwotoneMail size='5rem' />
            <BoxText>Email</BoxText>
            <BoxText>srulybrach@gmail.com</BoxText>
          </Box>
        </a>
        <a href={links.resume} download='srulybrach-resume'>
          <Box>
            <TiDocumentText size='5rem' />
            <BoxText>Resume</BoxText>
            <BoxText>Download</BoxText>
          </Box>
        </a>
      </Boxes>
      <br />
    </Section>
  );
};

export default Contact;
