import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

let clients = [
  {
    name: "Javascript",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    // position: "web developer",
    // stars: 3,
    // disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "HTML",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    // position: "web developer",
    // stars: 4,
    // disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "CSS",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    // position: "web developer",
    // stars: 5,
    // disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "React",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    // position: "web developer",
    // stars: 5,
    // disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //     Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Redux",
    img_url: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "Node.Js",
    img_url:
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
  },
  {
    name: "PostgreSQL",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
  },
  {
    name: "Sequelize",
    img_url:
      "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
  },
  {
    name: "Express.js",
    img_url:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
  },
  {
    name: "Tailwind CSS",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Typescript",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">Skills</span>
        <h1>My Favorite Technologies</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
