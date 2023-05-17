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
          Portfolio
        </SectionTitle>
        <SectionText>
          I work as a Technical Project Manager, with development experience at every stage of the stack.
        </SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
