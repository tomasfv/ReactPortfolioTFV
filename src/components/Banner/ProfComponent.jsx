import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
// import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Tomás Fernández Valdés</h1>
          <h3>Software Developer</h3>
          <p>
            Full Stack and Game Programmer with experience in Javascript, React, Redux, C#, Unity, React
            Native, HTML, CSS, Node.js, Sequelize, and PostgreSQL, among other
            technologies.
          </p>
          <a download href="./TomásFernándezValdés_ SoftwareDev_ENG.pdf">
            <button>Download CV</button>
          </a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/tomasfv">
                  <AiFillGithub />
                </a>
              </span>
              {/* <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span> */}
              <span>
                <a href="https://www.linkedin.com/in/tomasferval/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
          
          <About>
          <div>
            <p>
              Since I was a child I have always been fascinated by technology and interactive experiences, but it was when I introduced myself to the video game industry that I discovered programming and decided to learn how to program. 
            </p>
            <p>
              Currently, I have experience in fascinating technologies for app, web and games development. I met many people passionate about technology, always willing to help, persevering, and excellent colleagues. I learned a lot about teamwork and continuous collaboration, two admirable and remarkable characteristics I find in the tech industry.
            </p>
            <p>
              My strongest motivation is being part of innovative projects that leave a pleasant experience for the user, and above all things, to continue learning more about this great industry.
            </p>
            <p>
              • Check my background in the video game industry <a href="https://coffee-maker-productions.webnode.page/" target="_blank" rel="noreferrer">here</a>
            </p>
            <p>
              • Check the first video game created by me (using C# and Unity) <a href="https://tomasfv.itch.io/maze-ball-challenge" target="_blank" rel="noreferrer">here</a>
            </p>
          </div>
          </About>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            //src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            src="https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/Perfil_CV.jpeg"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const About = styled.div`
p{
  line-height: 1.5;
  margin-top: 20px;
}
a{
  color: #01be96;
};
`;

const Profile = styled.div`
  img {
    width: 25rem;
    border-radius: 12px;
    //filter: brightness(0.9);
    filter: drop-shadow(0px 10px 10px #01be9570) brightness(0.9);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
