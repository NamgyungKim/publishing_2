import React from "react";
import styled from "@emotion/styled";
import MainImg from "../../../assets/images/main.jpg";
import { H3 } from "./Heading";
import geoblue from "../../../assets/images/geoblue.png";
import geored from "../../../assets/images/geored.png";
import geopurple from "../../../assets/images/geopurple.png";

const Expandedcontent = () => {
  return (
    <Wrap style={{ backgroundImage: `url(${MainImg})` }}>
      <Content className="layout">
        <Section1>
          <p>SLIDER REVOLUTION HERO, POPULAR, SLIDER TEMPLATE</p>
          <H3>Artistic Parallax Slider</H3>
          <p>
            Compliment your WordPress website with a striking hero slideshow
            like the Artistic Parallax Slider. The flexible text and image
            layers are customized in minutes with Slider Revolutions intuitive,
            visual editor.
          </p>
        </Section1>
        <Section2>
          <div>
            <img src={MainImg} alt="" />
          </div>
          <div>
            <h4>
              Slider Revolution Templates Are 100% <span>Responsive</span>
            </h4>
            <p>
              We designed the <i>Artistic Parallax Slider</i> to look good no
              matter what device your visitors are on. <br />
              We’ve also given you an easy-to-use responsive editor that allows
              you to edit and preview your Slider Revolution module from
              different views.
            </p>
          </div>
        </Section2>
        <Decoration className="geoblue" bgImage={geoblue} />
        <Section3>
          <div className="blur_card">
            <h4>Parallax Slider: Adding Depth with Parallax Effect</h4>
            <p>
              Experience a new dimension in web design with our Artistic
              Parallax Slider. This WordPress template incorporates the parallax
              effect, adding depth and dynamism to your website. The parallax
              slider design is not just visually appealing, but it also enhances
              user engagement. With Slider Revolution, create a memorable
              browsing experience today!
            </p>
          </div>
          <div className="flex">
            <div className="blur_card">
              <h4>Revolutionize Your Parallax Scrolling Website</h4>
              <p>
                Looking to enhance your parallax scrolling website? Our Artistic
                Parallax Slider is the perfect solution. With clear typography
                and gorgeous visuals, this template compliments your WordPress
                website, creating a striking hero slideshow. Slider Revolution's
                intuitive visual editor allows you to customize the flexible
                text and image layers in minutes.
              </p>
            </div>
            <div className="blur_card">
              <h4>Parallax Slider Design: A Game-Changer for Websites</h4>
              <p>
                When it comes to parallax slider design, our Artistic Parallax
                Slider stands out. This WordPress template offers scroll-based
                slide navigation, making it a winner for a wide range of use
                cases. With Slider Revolution, you get more than just a slider -
                you get a tool that transforms your website into a dynamic and
                engaging platform.
              </p>
            </div>
          </div>
        </Section3>
        <Decoration className="geopurple" bgImage={geopurple} />
        <Decoration className="geored" bgImage={geored} />
        <button>
          Get This Template When You Sign Up For Slider Revolution
        </button>
      </Content>
    </Wrap>
  );
};

const Wrap = styled.section`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  background-position: 50% 100%;
  filter: saturate(1.7);

  :before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
    backdrop-filter: blur(30px);
    background: linear-gradient(
      40deg,
      rgba(243, 242, 246, 0.15) 0%,
      rgba(243, 242, 246, 0.65) 20%,
      rgba(243, 242, 246, 0.98) 50%,
      rgba(243, 242, 246, 1) 100%
    );
  }

  button {
    display: block;
    margin: auto;
    padding: 15px 50px;
    border-radius: 50px;
    border: none;
    background-color: #f7345e;
    transition: 0.25s;
    color: white;
    font-size: 18px;
    font-weight: bold;

    :hover {
      background-color: #22c8e5;
    }
  }
`;

const Content = styled.div`
  position: relative;
`;

const Section1 = styled.div`
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  font-weight: 100;
  margin-bottom: 60px;

  p:first-child {
    color: #f7345e;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 17px;
  }
`;
const Section2 = styled.div`
  display: flex;
  gap: 50px;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 100px;

  img {
    width: 640px;
    border-radius: 5px;
  }

  h4 {
    font-size: 25px;
    font-weight: bold;
    line-height: 30px;
    margin-bottom: 30px;
  }

  i {
    font-style: italic;
  }

  span {
    position: relative;
    display: inline-block;
    font-style: italic;

    :after {
      content: "";
      bottom: -3px;
      left: -5px;
      position: absolute;
      display: inline-block;
      height: 5px;
      width: 140px;
      transform: rotate(3deg);
      border-radius: 2px;
      background-color: rgb(247, 52, 94);
    }

    :before {
      content: "";
      bottom: -5px;
      left: 0px;
      position: absolute;
      display: inline-block;
      height: 6px;
      width: 120px;
      width: 130px;
      transform: rotate(-2deg);
      border-radius: 2px;
      background-color: rgb(247, 52, 94);
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 100%;
    }

    > div {
      flex-grow: 1;
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
const Section3 = styled.div`
  gap: 50px;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 50px;
  position: relative;
  z-index: 10;

  .flex {
    display: flex;
    gap: 20px;
    @media (max-width: 770px) {
      flex-direction: column;
      gap: 0px;
    }
  }

  h4 {
    font-size: 25px;
    font-weight: bold;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .blur_card {
    flex-grow: 1;
    padding: 50px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(30px);
    border-radius: 5px;
    margin-bottom: 30px;
  }
`;

const Decoration = styled.div<{ bgImage: string }>`
  position: relative;

  :after {
    display: block;
    content: "";
    position: absolute;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
  }

  &.geored {
    :after {
      transform: translate(50%, -50%);
      right: 0;
      bottom: 0;
      width: 250px;
      height: 250px;
    }
  }

  &.geoblue {
    :after {
      transform: translateY(-50%);
      right: 100px;
      width: 150px;
      height: 150px;
    }
  }

  &.geopurple {
    :after {
      transform: translateX(-50%);
      bottom: 0px;
      width: 200px;
      height: 200px;
    }
  }
`;

export default Expandedcontent;
