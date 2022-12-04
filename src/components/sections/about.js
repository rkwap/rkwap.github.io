import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'C/C++',
    'Python',
    'Ruby',
    'PHP',
    'Flask',
    'Django',
    'Ruby on Rails',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'SQLite',
    'HTML & CSS',
    'Bootstrap',
    'Git',
    'Postman API',
    'Nginx',
    'AWS',
    'Google Cloud',
    'Linux',
    'Unix',
  ];

  return (
    <StyledAboutSection id="intro" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I am Ramit. I'm currently a Software Engineer at{' '}
              <a href="https://www.interviewbit.com" target="__blank">
                InterviewBit
              </a>{' '}
              working on interesting and meaningful projects. I studied engineering in the field of
              Electronics and Communication at the{' '}
              <a href="https://www.thapar.edu" target="__blank">
                Thapar Institute of Engineering and Technology
              </a>
            </p>
            <p>
              My interest in computers and programming started way back in 2008 when I used to play
              Java and Symbian games on my dad's Nokia 6600. I started with Googling things and from
              XML to WML, from HTML & CSS to PHP, Python, it's been a very long journey of learning
              for me! In the past, I have created multiple projects and participated in many
              hackathons. I have also worked at{' '}
              <a href="https://www.zs.com" target="__blank">
                ZS Associates
              </a>{' '}
              as an intern and had a lot of learning in just 6 months.
            </p>
            {/* <p>
              I am pursuing my B.E degree from {' '}
              <a href="https://thapar.edu" target="__blank">TIET, Patiala</a>.<br></br>
              I recently joined the Business Technology team at <a href="https://www.zs.com" target="__blank">ZS Associates</a> as an intern where I work
              on a wide variety of interesting and meaningful projects on a daily basis.
            </p> */}

            <p>Here are a few tools and technologies I've have worked with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/ramit.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
