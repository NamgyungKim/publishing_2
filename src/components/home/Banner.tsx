import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import bg1 from "../../assets/images/sld1-bg.jpeg";
import bg2 from "../../assets/images/sld2-bg.jpg";
import bg3 from "../../assets/images/sld3-bg.jpg";
import bg4 from "../../assets/images/sld4-bg.jpg";
// import slider1 from "../../assets/images/slider1_01.png";
// import slider2_land from "../../assets/images/slider2_02.png";
// import slider2_people from "../../assets/images/slider2_03.png";
// import slider2_jupiter from "../../assets/images/slider2_04.png";
// import slider3_astronaut from "../../assets/images/slider3_05.png";
// import slider3_bird from "../../assets/images/slider3_06.png";
// import slider3_shadow from "../../assets/images/slider3_07.png";
// import slider4_spacecraft from "../../assets/images/slider4_08.png";
// import slider4_light from "../../assets/images/slider4_09.png";
// import slider4_clouds from "../../assets/images/slider4_10.png";
// import slider4_land from "../../assets/images/slider4_11.png";

import logo from "../../assets/images/logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Banner: React.FC = () => {
  const TOTALPAGE = 4;
  const INTERVAL = 5000;
  const [page, setPage] = useState<number>(1);
  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      nextPage();
    }, INTERVAL);

    if (page <= 0) {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }

    return () => {
      clearInterval(timer);
    };
  }, [page]);

  function prevPage() {
    if (page <= 1) {
      setPage(TOTALPAGE);
    } else {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page >= TOTALPAGE) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  function clickNext() {
    clearInterval(timer);
    nextPage();
  }

  function clickPrev() {
    clearInterval(timer);
    prevPage();
  }

  return (
    <Wrap>
      <InnerWrap>
        <SliderTop>
          <div>
            <img src={logo} alt="logo" />
            <p>Made with Slider Revolution</p>
          </div>
          <p>ABOUT</p>
        </SliderTop>
        <SliderBg>
          <BgImage
            className={`bg_page1 ${page === 1 ? "show" : "hide"}`}
            style={{ backgroundImage: `url(${bg1})` }}
          />
          <BgImage
            className={`bg_page2 ${page === 2 ? "show" : "hide"}`}
            style={{ backgroundImage: `url(${bg2})` }}
          />
          <BgImage
            className={`bg_page3 ${page === 3 ? "show" : "hide"}`}
            style={{ backgroundImage: `url(${bg3})` }}
          />
          <BgImage
            className={`bg_page4 ${page === 4 ? "show" : "hide"}`}
            style={{ backgroundImage: `url(${bg4})` }}
          />
        </SliderBg>
        <Slider>
          {/*<SliderObject1>*/}
          {/*  <h2>in the clouds</h2>*/}
          {/*  <span>GET LOST</span>*/}
          {/*  <p>*/}
          {/*    Dream the impossible dream with this artistic parallax slider for*/}
          {/*    Slider Revolution. Available for download with any license now!*/}
          {/*  </p>*/}
          {/*  <a className="more">MORE</a>*/}
          {/*  <img src={slider1} />*/}
          {/*</SliderObject1>*/}
          {/*<SliderObject2>*/}
          {/*  <h2>to the unknown</h2>*/}
          {/*  <span>AND BACK</span>*/}
          {/*  <p>*/}
          {/*    A WordPress parallax slider doesn't have to be boring. Slider*/}
          {/*    Revolution brings the WOW back into modern webdesign with*/}
          {/*    tasteful, visual effects.*/}
          {/*  </p>*/}
          {/*  <a className="more">MORE</a>*/}
          {/*  <img src={slider2_people} />*/}
          {/*  <img src={slider2_land} />*/}
          {/*  <img src={slider2_jupiter} />*/}
          {/*</SliderObject2>*/}
          {/*<SliderObject3>*/}
          {/*  <h2>a sky odyssey</h2>*/}
          {/*  <span>2022</span>*/}
          {/*  <p>*/}
          {/*    Reach for the sky and beyond by building your websites hero header*/}
          {/*    with this parallax slider template, in minutes.*/}
          {/*  </p>*/}
          {/*  <a className="more">MORE</a>*/}
          {/*  <img src={slider3_shadow} />*/}
          {/*  <img src={slider3_astronaut} />*/}
          {/*  <img src={slider3_bird} />*/}
          {/*</SliderObject3>*/}
          {/*<SliderObject4>*/}
          {/*  <h2>believe its true</h2>*/}
          {/*  <span>WE ARE NOT ALONE</span>*/}
          {/*  <p>*/}
          {/*    Convince your customers with this stunning, vertical parallax*/}
          {/*    slider template.*/}
          {/*  </p>*/}
          {/*  <a className="more">MORE</a>*/}
          {/*  <img src={slider4_spacecraft} />*/}
          {/*  <img src={slider4_light} />*/}
          {/*  <img src={slider4_land} />*/}
          {/*  <img src={slider4_clouds} />*/}
          {/*</SliderObject4>*/}
        </Slider>
        <SliderBottom>
          <div>
            <span className="date">
              {("0" + page).slice(-2)} - {("0" + TOTALPAGE).slice(-2)}
            </span>
            <div className="snsIcons">
              <FacebookRoundedIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div>
            <SliderBtnWrap>
              <button onClick={clickPrev}>
                <KeyboardArrowUpIcon />
              </button>
              <button onClick={clickNext}>
                <KeyboardArrowDownIcon />
              </button>
            </SliderBtnWrap>
            <p className="contact">CONTACT</p>
          </div>
        </SliderBottom>
      </InnerWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .swiper {
    width: 100vw;
    height: 100vh;
  }

  .swiper-slide {
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0 !important;
  }
`;
const SliderTop = styled.div`
  position: absolute;
  justify-content: space-between;
  top: 0;
  display: flex;
  width: 100%;
  padding-top: 40px;
  z-index: 100;

  p {
    color: white;
    opacity: 0.8;
    font-size: 18px;
    cursor: pointer;
    line-height: 40px;
    transition: border-bottom-color 0.5s;
    border-bottom: 1px solid;
    border-bottom-color: transparent;

    :hover {
      border-bottom-color: rgba(255, 255, 255, 0.56);
    }
  }

  > div > p {
    margin-left: 160px;
    font-weight: 300;
    @media (max-width: 479px) {
      display: none;
    }
  }

  > p {
    font-weight: bold;
    margin-right: 40px;
  }

  img {
    position: absolute;
    top: 20px;
    left: 35px;
  }
`;
const SliderBottom = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p,
  span {
    opacity: 0.8;
    color: white;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }

  .date {
    font-size: 18px;
    font-weight: bold;
    margin-right: 100px;
  }

  .snsIcons {
    display: flex;
    color: white;
    cursor: pointer;

    > svg {
      transition: border-bottom-color 0.5s;
      border-bottom: 1px solid;
      border-bottom-color: transparent;
      padding: 10px 15px;

      :hover {
        border-bottom-color: rgba(255, 255, 255, 0.56);
      }
    }
  }

  .contact {
    color: white;
    opacity: 0.8;
    font-size: 18px;
    cursor: pointer;
    line-height: 40px;
    transition: border-bottom-color 0.5s;
    border-bottom: 1px solid;
    border-bottom-color: transparent;

    :hover {
      border-bottom-color: rgba(255, 255, 255, 0.56);
    }
  }
`;
const SliderBtnWrap = styled.div`
  display: flex;
  margin-right: 50px;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.56);
    width: 48px;
    height: 41px;
    transition: 0.5s;
    outline-style: solid;
    outline-width: 1px;
    outline-color: transparent;

    &:first-of-type {
      box-sizing: border-box;
      border-right: 1px solid rgba(255, 255, 255, 0.56);

      :hover {
        border-right: 1px solid transparent;
      }
    }

    &:hover {
      outline-color: rgba(255, 255, 255, 0.56);
    }
  }
`;

const SliderBg = styled.div`
  height: 100vh;
  height: 100%;
  overflow: hidden;
  //mask: linear-gradient(
  //  180deg,
  //  transparent,
  //  white var(--buff),
  //  white calc(100% - var(--buff)),
  //  transparent
  //);
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1);
  background-position: center;
  transition: 2s;

  mask: linear-gradient(
      transparent,
      white var(--buff) calc(100% - var(--buff)),
      transparent
    ),
    linear-gradient(
      90deg,
      transparent,
      white var(--buff) calc(100% - var(--buff)),
      transparent
    );

  &.show {
    //opacity: 1;
    //transform: translateY(100px);
  }

  &.hide {
    //opacity: 0;
    //visibility: hidden;
    //transform: translateY(-100px);
  }

  &.scale_up {
    transform: scale(1);
  }
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    max-width: 100%;
  }

  h2 {
    font-size: 108px;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.5;
    color: white;
  }

  span {
    color: white;
    font-size: 17px;
  }

  a.more {
    color: white;
    opacity: 0.8;
    font-size: 18px;
    cursor: pointer;
    line-height: 40px;
    transition: border-bottom-color 0.5s;
    border-bottom: 1px solid;
    border-bottom-color: rgba(255, 255, 255, 0.3);
    padding-bottom: 8px;

    :hover {
      border-bottom-color: rgba(255, 255, 255, 0.7);
    }
  }
`;
const InnerWrap = styled.div``;
// const SliderObject1 = styled.div`
//   img {
//     position: absolute;
//   }
// `;
// const SliderObject2 = styled.div``;
// const SliderObject3 = styled.div``;
// const SliderObject4 = styled.div``;

export default Banner;
