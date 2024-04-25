import React from "react";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const socialData = [
    {
      color: "FF0000",
      icon: <YouTubeIcon style={{ color: "#fff" }} />,
      link: "https://www.youtube.com/"
    },
    {
      color: "1877F2",
      icon: <FacebookRoundedIcon style={{ color: "#fff" }} />,
      link: "https://www.facebook.com/?locale=ko_KR"
    },
    {
      color: "1CA0F1",
      icon: <TwitterIcon style={{ color: "#fff" }} />,
      link: "https://twitter.com/?lang=ko"
    },
    {
      color: "C32AA3",
      icon: <InstagramIcon style={{ color: "#fff" }} />,
      link: "https://www.instagram.com/"
    },
    {
      color: "BD081C",
      icon: <PinterestIcon style={{ color: "#fff" }} />,
      link: "https://www.pinterest.co.kr/"
    },
    {
      color: "EA4C89",
      icon: <SportsBasketballIcon style={{ color: "#fff" }} />,
      link: "https://dribbble.com/"
    }
  ];

  const links = [
    {
      category: "SLIDER REVOLUTION",
      children: [
        {
          name: "Build Anything Visually",
          link: ""
        },
        {
          name: "Pro-Level Design",
          link: ""
        },
        {
          name: "Templates",
          link: ""
        },
        {
          name: "Advanced Transitions",
          link: ""
        },
        {
          name: "Addons",
          link: ""
        },
        {
          name: "Upgrade To Premium",
          link: ""
        },
        {
          name: "Affiliate Program",
          link: ""
        },
        {
          name: "Jobs",
          link: ""
        }
      ]
    },
    {
      category: "SUPPORT",
      children: [
        {
          name: "Help Center",
          link: ""
        },
        {
          name: "Documentation",
          link: ""
        },
        {
          name: "FAQs",
          link: ""
        },
        {
          name: "Contact Us",
          link: ""
        },
        {
          name: "Complaints",
          link: ""
        },
        {
          name: "DMCA",
          link: ""
        },
        {
          name: "Open a Ticket",
          link: ""
        }
      ]
    },
    {
      category: "PLATFORMS",
      children: [
        {
          name: "WordPress",
          link: "",
          tag: "v6.x",
          tagColor: "21C3E0"
        },
        {
          name: "Shopify",
          link: "",
          tag: "v6.x",
          tagColor: "8B5EE5"
        },
        {
          name: "jQuery",
          link: "",
          tag: "v5.4",
          tagColor: "8B5EE5"
        },
        {
          name: "Magento",
          link: "",
          tag: "v6.x",
          tagColor: "8B5EE5"
        },
        {
          name: "Prestashop",
          link: "",
          tag: "v6.x",
          tagColor: "8B5EE5"
        },
        {
          name: "OpenCart",
          link: "",
          tag: "v6.x",
          tagColor: "8B5EE5"
        },
        {
          name: "TYPO3",
          link: "",
          tag: "v6.x",
          tagColor: "8B5EE5"
        },
        {
          name: "Essential Grid Gallery",
          link: ""
        }
      ]
    },
    {
      category: "RESOURCES",
      children: [
        {
          name: "Pricing",
          link: ""
        },
        {
          name: "Terms of Use",
          link: ""
        },
        {
          name: "Legal Disclosure (Impressum)",
          link: ""
        },
        {
          name: "Privacy Policy (Datenschutz)",
          link: ""
        },
        {
          name: "Licensing",
          link: ""
        },
        {
          name: "Cookie policy (GDPR)",
          link: ""
        },
        {
          name: "Sitemap",
          link: ""
        },
        {
          name: "Newsletter",
          link: ""
        }
      ]
    }
  ];

  const copyright = "© Copyright 2023 by ThemePunch OHG";

  return (
    <FooterWrap>
      <TgContainer className="layout">
        {links.map(({ category, children }, index) => (
          <div className="category_wrap" key={index}>
            <h4>{category}</h4>
            <ul>
              {children.map(({ name, link, tag, tagColor }, i) => (
                <li key={i}>
                  <Link to={link}>
                    {name}{" "}
                    <span style={{ color: `#${tagColor}`, marginLeft: "4px" }}>
                      {" "}
                      {tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </TgContainer>
      <SiteFooterBar>
        <div className="layout">
          <SocialIcons>
            {socialData.map(({ color, icon, link }, i) => (
              <Link to={link} key={i}>
                <SocialIcon color={color}>{icon}</SocialIcon>
              </Link>
            ))}
          </SocialIcons>
          <span>{copyright}</span>
        </div>
      </SiteFooterBar>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #160a35;
`;
const TgContainer = styled.div`
  display: flex;
  padding-top: 60px;
  padding-bottom: 60px;
  justify-content: space-between;
  font-size: 15px;
  box-sizing: border-box;
  word-break: keep-all;

  .category_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 45px;

    a {
      display: block;
      color: #9c8cc0;
      text-decoration: none;
      transition: 0.2s;

      :hover {
        color: #c4b2ed;
      }
    }

    h4 {
      color: white;
      font-weight: bold;
      margin-bottom: 25px;
    }

    ul {
      display: flex;
      flex-direction: column;

      a {
        margin: 5px 0;
        min-height: 26px;
        line-height: 1.5;
      }
    }
  }

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const SiteFooterBar = styled.div`
  background-color: #5e35b1;
  display: flex;
  justify-content: center;

  > div {
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    color: white;
    font-size: 15px;
    @media (max-width: 767px) {
      width: 736px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      row-gap: 0.8rem;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #${({ color }) => color};
  text-align: center;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 1240px) {
    width: 30px;
    height: 30px;
    > svg {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export default Footer;
