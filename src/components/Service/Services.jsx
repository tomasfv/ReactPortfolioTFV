import React from "react";
//import { BsStack } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoGameController} from "react-icons/io5";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={IoGameController}
            title={"video games developer"}
            disc={`C# and Unity`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaLaptopCode}
            title={"frontend developer"}
            disc={`Javascript, HTML, CSS, React, Redux, Tailwind.CSS, React Native, Bootstrap`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={GoGear}
            title={"backend developer"}
            disc={`Node.Js, Express.Js, PostgreSQL, Sequelize, TypeScript`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
