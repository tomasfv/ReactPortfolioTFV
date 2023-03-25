import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/TVGS-3.jpg",
    disc: "React, Redux, HTML, CSS, Javascript, Node.js, Express.js, PostgreSQL, Sequelize.",
    title: "The Video Games Shelter",
    url: "https://tvgs.netlify.app/",
  },
  {
    img: "https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/travelWeb.jpg",
    disc: "Javascript, HTML, React, CSS.",
    title: "Travel Website",
    url: "https://travel-website-tomasfv.vercel.app/",
  },
  {
    img: "https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/pokemon.jpg",
    disc: "Node.js, Express.js, PostgreSQL, Sequelize, React, Redux, Javascript, CSS, HTML.",
    title: "Pókemon Web",
    url: "https://pi-pokemon-main-wine.vercel.app/",
  },
  {
    img: "https://raw.githubusercontent.com/tomasfv/Typescript-Stopwatch/main/TSStopWatch.jpg",
    disc: "Typescript, HTML, CSS, React.",
    title: "TS Stopwatch App",
    url: "https://stopwatchts.netlify.app/",
  },
  {
    img: "https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/KustomsSports.jpg",
    disc: "Tailwind, Javascript, HTML, React, Redux, PostgreSQL, Sequelize, Node.js, Express.js.",
    title: "Kustoms Sports",
    url: "https://www.youtube.com/watch?v=bM7t9NczBkY",
  },
  {
    img: "https://raw.githubusercontent.com/tomasfv/portfolio_TFV/main/ToDoApp.jpg",
    disc: "Javascript, React Native, Expo.",
    title: "ToDo App Mobile",
    url: "https://github.com/tomasfv/ToDo-App-Mobile",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
