import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { StaticImage } from 'gatsby-plugin-image';
import { MonitorSvg } from '@components';
// import WavesSvg from '../../images/wave.svg';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 800px;
    // font-family: var(--font-nanum);
    // font-size:35px;
    // color: var(--lightest-slate);
  }

  .emoji {
    display: inline-block;
    vertical-align: text-top;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    margin-left: 0.5em;
    margin-top: 0.1em;
    background-image: url('./namaste_image.png');
    background-repeat: no-repeat;
  }

  .namaste {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-hindi);
    font-size: clamp(50px, 5vw, 50px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    top: 0px;
  }

  // ## Mobile View
  .monitor,
  .waves {
    display: none;
  }

  // ## Desktop View
  @media screen and (min-width: 1200px) {
    .grid-container {
      display: grid;
      grid-template-columns: 70% 30%;
    }

    .monitor {
      filter: brightness(90%) saturate(90%);
      display: block;
      position: relative;
      min-width: 15em;
      max-width: 30em;
      width: 30em;
      margin-left: auto;
      padding-left: -20rem;
      top: 10px;
      // margin-top:-5rem;
    }
  }

  // ## ipad View
  @media screen and (min-width: 1200px) and (max-width: 1600px) {
    .monitor {
      min-width: 15em;
      max-width: 23em;
      width: 23em;
    }
  }

  .waves {
    // display: block;
    // position:absolute;
    // width:100%;
    // padding-top:33em;
    // left: 0px;
    // right: 0px;
    // top:38.5em;
    // margin-left:-27.5em;
    // margin-top:60rem;
    // overflow:hidden;
    // height:20em;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <br></br>;
  // const image = getImage('/images/namaste_image.png');

  const two = (
    <h1 className="namaste">
      नमस्ते |
      <StaticImage
        src="../../images/namaste_image.png"
        quality={95}
        className="emoji"
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Namaste"
      />
    </h1>
  );

  const three = <h2 className="small-heading">I'm Ramit Koul, a software engineer</h2>;

  const four = (
    <h3 className="small-heading">
      I can solve <s>all some one of your</s> problems, ok?
    </h3>
  );

  // const three=<br></br>;

  const five = (
    <p>
      I design, build and sometimes rescue applications.<br></br>
      Have a project, idea or problem you'd like to discuss?
    </p>
  );

  const six = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );
  const monitor_svg = (
    <div className="monitor grid-item">
      <MonitorSvg />
    </div>
  );

  const items = [two, three, four, five, six];
  const svgs = [monitor_svg];

  return (
    <StyledHeroSection>
      {/* <div onClick={() => window.location.replace("/#about")}>
        <span>go to about</span>

      </div> */}
      <div className="grid-container">
        <div className="grid-item">
          <div>{one}</div>
          <div>{one}</div>
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>

        <TransitionGroup component={null}>
          {isMounted &&
            svgs.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>

      {/* <img style={{position:'absolute', bottom: '0px', left:'0px'}} src={WavesSvg} alt="Waves" /> */}
    </StyledHeroSection>
  );
};

export default Hero;
