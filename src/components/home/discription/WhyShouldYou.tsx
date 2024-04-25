import React from "react";
import styled from "@emotion/styled";
import { Card } from "../../common/Card";
import { H2, H3, H4 } from "./Heading";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

const WheyShouldYou: React.FC = () => {
  const data = [
    {
      icon: img1,
      title: "Instantly Captures Visitors’ Attention",
      text: "Half of the battle in getting people to engage with your website lies in getting them to stop and pay attention to your content. Your visitors aren’t likely to encounter websites that use a cool slider like this one, so consider the battle won."
    },
    {
      icon: img2,
      title: "Customizations As Easy As 1-2-3",
      text: "You might be looking at this Slider Revolution template and wondering how the heck you’re going to repurpose it for your needs. Don’t worry. Whether you want to edit the logo, change the images, or add new text to the sliders, it can easily be done within minutes."
    },
    {
      icon: img3,
      title: "The Perfect Parallax Slider Solution",
      text: "Gorgeous visuals and clear typography, paired with scroll-based slide navigation, make this WordPress parallax slider template a winner for a wide range of use cases."
    }
  ];
  const h2 = "Why Should You";
  const h3 = "Use This Slider Revolution Template?";
  const subText = "We’ll give you 3 very good reasons…";

  return (
    <Wrap className="layout">
      <TextArea>
        <H2>{h2}</H2>
        <H3>{h3}</H3>
        <p>{subText}</p>
      </TextArea>
      <CardWrap>
        {data.map(({ icon, title, text }, i) => (
          <Card key={i}>
            <CardInner>
              <img src={icon} />
              <H4>{title}</H4>
              <p>{text}</p>
            </CardInner>
          </Card>
        ))}
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
  display: flex;
  gap: 20px;

  > div {
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
  }

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
const CardInner = styled.div`
  text-align: center;
  line-height: 22px;

  img {
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: rgba(28, 9, 80, 0.5);
  }
`;

export default WheyShouldYou;
