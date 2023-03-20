import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>

        Hi, I'm Bin Li. A student learning the front end of web developer. I am new to web develop and love to do web develop. I will become an excellent web developer.
      </SectionText>
      <Button onClick={() => { window.location = "http://linkedin.com" }}> Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;