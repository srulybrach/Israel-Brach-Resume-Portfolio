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
        Hi, I'm Israel! I am a graduate of software engineering at
        Touro College in New York. I just finished my final semester of
        Computer Science, and can't wait to get out there and start coding!
      </SectionText>
      <SectionText>
        I got into coding in 2014 because I enjoy problem solving. The rush of having
        a computer correctly understand my solution to a problem is rarely met.
      </SectionText>
      <SectionText>
        I live in New York City. My hobbies are 3D Printing,
        growing crops, playing video games, cooking, general tinkering, traveling and more.
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
