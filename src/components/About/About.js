import React from 'react';
import { Img } from './AboutStyles';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <br />
      <br />
      <SectionText>
        {/* Personal profile image */}
        <Img src='/me.png' alt="Israel Brach's profile picture" />
          Hello, my name is Israel! I work as a Web Project Manager at B&H Photo Video,
          a position I've held since completing my education. I earned my Bachelor's degree
          in Software Engineering from Touro College in New York, graduating in 2022.
      </SectionText>
      <SectionText>
        I got into coding in 2014 because I enjoy problem solving. The rush of having
        a computer correctly understand my solution to a problem is rarely met. Working with a large
        team and being part of so many problems being solved has been incredibly gratifying.
      </SectionText>
      <SectionText>
        I live in New York City. Some of my hobbies are 3D Printing,playing video games, cooking, general tinkering, and traveling.
      </SectionText>
      <br />
      <br />
      <SectionDivider />
      <br />
      <br />
    </Section>
  );
};

export default About;
