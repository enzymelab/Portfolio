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

        Hi, I'm Bin Li. A student learning the front end of web develope. I am new but love to design webpage. I have enthusiasm for learn and work on Web develope.
      </SectionText>
      <form method="get" action="BLresume.docx">
        <Button type="submit">Download CV</Button>
      </form>

      {/* <Button onClick={() => { window.location = "http://linkedin.com" }}> Download CV</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;