import { H2, H3 } from "./Heading";
import styled from "@emotion/styled";
import ToggleCard from "../../common/ToggleCard";
import React from "react";
import { Link } from "react-router-dom";

const GetTheMost: React.FC = () => {
  const h2 = "Get The Most";
  const h3 = "Out Of This Slider Template";

  const subText =
    "Our in-depth resources will provide you with knowledge and instant solutions.";

  return (
    <Wrap className="layout">
      <TextArea>
        <H2>{h2}</H2>
        <H3>{h3}</H3>
        <p>{subText}</p>
      </TextArea>
      <CardWrap>
        <div>
          <ToggleCard title="How To Install This Template?">
            <CardInner>
              Check out our comprehensive
              <Link to={"/"}> beginners guide to installing templates.</Link>
            </CardInner>
          </ToggleCard>
        </div>
        <div>
          <ToggleCard title="Customize This Template">
            <CardInner>
              Learn how to edit text, links and images:{" "}
              <Link to={"/"}>Basic Module Editing Guide</Link>
              <br />
              <br />
              Learn how to swap videos & customize colors:{" "}
              <Link to={"/"}>Intermediate Template Editing Guide</Link>
              <br />
              <br />
              The fundamentals of animation in Slider Revolution:{" "}
              <Link to={"/"}>Animation Fundamentals</Link>
            </CardInner>
          </ToggleCard>
        </div>
        <div>
          <ToggleCard title="Getting Started With Slider Revolution">
            <CardInner>
              Our user manual starts with installing and registering Slider
              Revolution. From there, you will learn everything you need to know
              in order to work with the editor.
              <br />
              <br />
              Whether you are a new or advanced user, you will surely get some
              knowledge out of our <Link to={"/"}>manual.</Link>
            </CardInner>
          </ToggleCard>
        </div>
        <div>
          <ToggleCard title="FAQ & Tutorials">
            <CardInner>
              Instantly find solutions to the most commmon issues and follow
              in-depth tutorials: <Link to={"/"}>FAQs & Tutorials</Link>
              <br />
              <br />
              Watch practical, step-by-step exercises in our video guides
              section:
              <Link to={"/"}>Video Guides</Link>
            </CardInner>
          </ToggleCard>
        </div>
      </CardWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 170px;
  margin-top: 150px;
`;
const TextArea = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    font-size: 30px;
    font-weight: 300;
    line-height: 40px;
    margin-top: 30px;
    color: #1c0950;
  }
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > div {
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
  }

  @media (max-width: 770px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
const CardInner = styled.div`
  line-height: 26px;
  padding-top: 30px;

  a {
    color: #f7345e;
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: #22c8e5;
    }
  }
`;

export default GetTheMost;
