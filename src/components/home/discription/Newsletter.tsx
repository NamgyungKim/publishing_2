import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Card } from "../../common/Card";
import { H4 } from "./Heading";
import newsletterIcon from "../../../assets/images/newsletter_icon.png";
import blogImg1 from "../../../assets/images/blog_1.png";
import blogImg2 from "../../../assets/images/blog_2.png";
import blogImg3 from "../../../assets/images/blog_3.png";
import popularImg1 from "../../../assets/images/popular_resources_1.jpeg";
import popularImg2 from "../../../assets/images/popular_resources_2.jpg";
import popularImg3 from "../../../assets/images/popular_resources_3.jpg";
import popularImg4 from "../../../assets/images/popular_resources_4.jpg";

const Newsletter: React.FC = () => {
  const blogs = [
    {
      img: blogImg1,
      text: "Creative CSS Link Styles Examples for Eye-Catching Sites",
      type: "PESOURCES",
      link: ""
    },
    {
      img: blogImg2,
      text: "CSS Ripple Effect Examples for Modern Websites",
      type: "RESOURCES",
      link: ""
    },
    {
      img: blogImg3,
      text: "How to Create an Employee Spotlight Presentation Using a Website Slider [Tutorial]",
      type: "TUTORIALS",
      link: ""
    }
  ];

  const popularResources = [
    {
      img: popularImg1,
      text: "Optimizing Load Speed and Performance",
      type: "FAQ",
      link: ""
    },
    {
      img: popularImg2,
      text: "Quick Setup – Slider Revolution",
      type: "FAQ",
      link: ""
    },
    {
      img: popularImg3,
      text: "Create a Basic Responsive Slider",
      type: "VIDEO TUTORIAL",
      link: ""
    },
    {
      img: popularImg4,
      text: "Get Productive Fast",
      type: "TUTORIALS",
      link: "MANUAL"
    }
  ];

  return (
    <Wrap className="layout">
      <Card>
        <CardInner>
          <H4>From The Blog</H4>
          <ContentList>
            {blogs.map(({ img, link, text, type }, i) => (
              <Link to={link} key={i}>
                <img src={img} alt="" />
                <div>
                  <p>{text}</p>
                  <span>{type}</span>
                </div>
              </Link>
            ))}
          </ContentList>
        </CardInner>
      </Card>
      <Card>
        <CardInner>
          <H4>From The Blog</H4>
          <ContentList>
            {popularResources.map(({ img, link, text, type }, i) => (
              <Link to={link} key={i}>
                <img src={img} alt="" />
                <div>
                  <p>{text}</p>
                  <span>{type}</span>
                </div>
              </Link>
            ))}
          </ContentList>
        </CardInner>
      </Card>
      <Card>
        <NewsletterInner>
          <h3>
            Newsletter
            <img src={newsletterIcon} alt="newsletterIcon" />
          </h3>
          <p>
            Join over 35.000 others on the Slider Revolution email list to get
            access to the latest news and exclusive content.
          </p>
          <button>subscribe</button>
        </NewsletterInner>
      </Card>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 150px;

  > div {
    flex-grow: 1;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CardInner = styled.div``;
const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.2;

  a {
    display: flex;
    text-decoration: none;
    color: #1c0950;

    cursor: pointer;

    img {
      display: inline;
      width: 80px;
      height: 45px;
      margin-right: 15px;
      font-size: 15px;
      border-radius: 5px;
    }

    p {
      margin-bottom: 5px;
      transition: 0.25s;
    }

    span {
      font-size: 12px;
      color: rgba(28, 9, 80, 0.5);
    }

    :hover {
      p {
        color: #f7345e;
      }
    }
  }
`;

const NewsletterInner = styled.div`
  h3 {
    color: #1c0950;
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 30px;
    @media (max-width: 1240px) and (min-width: 1024px) {
      font-size: 35px;
    }
  }

  img {
    width: 45px;
    transform: translateY(5px);
    margin-left: 5px;
    @media (max-width: 1240px) and (min-width: 1024px) {
      width: 40px;
    }
  }

  p {
    margin-bottom: 30px;
    line-height: 1.5;
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: #22c8e5;
    transition: 0.25s;
    margin-top: 10px;
    color: white;
    font-size: 18px;

    :hover {
      background-color: #f7345e;
    }
  }
`;

export default Newsletter;
