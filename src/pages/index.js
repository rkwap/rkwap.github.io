import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Education, Contact } from '@components';
// import WaveReversedSvg from '../images/wave_up.svg';
// import WavesUpSvg from '../images/wave_up.svg';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <section style={{ padding: '0px' }} id="about">
        {/* <img style={{position:'absolute', left:'0px', top:'40rem'}} src={WavesUpSvg} alt="Waves" />
        <img style={{position:'absolute', left:'0px', top:'45rem', transform:'rotate(180deg)'}} src={WaveReversedSvg} alt="Waves" /> */}
        {/* <br /><br/><br /><br/> */}
      </section>
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Education />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
