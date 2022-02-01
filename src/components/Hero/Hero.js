import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Israel Brach <br />
          Developer Portfolio
        </SectionTitle>
        <SectionText>
          I am primarily a backend software developer with experience at every stage of the stack.
        </SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
