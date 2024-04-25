import { Card } from "../../common/Card";
import { H2, H3, H4 } from "./Heading";
import img4 from "../../../assets/images/img4.jpg";
import img5 from "../../../assets/images/img5.jpg";
import img6 from "../../../assets/images/img6.jpg";
import styled from "@emotion/styled";

const ThereMore: React.FC = () => {
  const data = [
    {
      icon: img4,
      title: "Compatibility",
      text: "This slider template is compatible with popular WordPress plugins — like WooCommerce — so you have a ton of flexibility and control over what you can do with it."
    },
    {
      icon: img5,
      title: "Support",
      text: "Slider Revolution comes with dedicated 1-on-1 VIP support. If you run into any problems with the plugin, website or slider templates, our tech wizards will help resolve your issues ASAP."
    },
    {
      icon: img6,
      title: "Speed",
      text: "Page loading speeds can significantly impact how well your website ranks. That’s why all of our templates are built for speed. If you want to give them an extra boost, our optimization guide will show you how to optimize them further."
    }
  ];
  const h2 = "There’s More";
  const h3 = "To This Template Than What You Can See";

  return (
    <Wrap className="layout">
      <TextArea>
        <H2>{h2}</H2>
        <H3>{h3}</H3>
        <p>
          It’s not just a beautifully designed slider or jaw-dropping animations
          that make this template — or any of Slider Revolution’s
          <span>250+</span>
          templates — special.
        </p>
      </TextArea>
      <CardWrap>
        {data.map(({ icon, title, text }, i) => (
          <Card key={i}>
            <CardInner>
              <img src={icon} alt={title} />
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

  span {
    display: inline-block;
    font-weight: bold;
    margin: 0 8px;
    position: relative;

    :after {
      content: "";
      bottom: -3px;
      left: -5px;
      position: absolute;
      display: inline-block;
      height: 5px;
      width: 80px;
      transform: rotate(1deg);
      background-color: rgb(247, 52, 94);
    }

    :before {
      content: "";
      bottom: -5px;
      left: 0px;
      position: absolute;
      display: inline-block;
      height: 6px;
      width: 75px;
      transform: rotate(-1deg);
      background-color: rgb(247, 52, 94);
    }
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

export default ThereMore;
