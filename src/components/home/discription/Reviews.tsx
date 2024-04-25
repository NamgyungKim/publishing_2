import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { H3 } from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "../../common/Rating";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TrustpilotLogo from "../../../assets/images/Trustpilot-logo.png";

const Reviews: React.FC = () => {
  const sliderRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    sliderRef.current.swiper.slidePrev();
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    sliderRef.current.swiper.slideNext();
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    setSlidesViewNum();
    window.addEventListener("resize", () => {
      setSlidesViewNum();
    });
  }, []);

  const setSlidesViewNum = () => {
    const { innerWidth } = window;
    if (innerWidth < 827) {
      setSlidesPerView(1);
    } else if (innerWidth < 1240) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  const sliderContent = [
    {
      rating: 4,
      title: "This is a stunning tool",
      content:
        "this.is a stuning tool. There are great templates that are easily modified to so simple and",
      writer: "Steve Mullholand",
      regDt: "December 3"
    },
    {
      rating: 5,
      title: "This is a stunning tool",
      content:
        "Slider Revolution is an incredible company. The've helped me through some issues blabla blabla blabla",
      writer: "William Lower",
      regDt: "December 31"
    },
    {
      rating: 3,
      title: "This is a stunning tool",
      content:
        "this.is a stuning tool. There are great templates that are easily modified to so simple and",
      writer: "Steve Mullholand",
      regDt: "December 3"
    },
    {
      rating: 4.5,
      title: "This is a stunning tool",
      content:
        "Slider Revolution is an incredible company. The've helped me through some issues blabla blabla blabla",
      writer: "William Lower",
      regDt: "December 31"
    },
    {
      rating: 5,
      title: "This is a stunning tool",
      content:
        "this.is a stuning tool. There are great templates that are easily modified to so simple and",
      writer: "Steve Mullholand",
      regDt: "December 3"
    },
    {
      rating: 4.5,
      title: "This is a stunning tool",
      content:
        "Slider Revolution is an incredible company. The've helped me through some issues blabla blabla blabla",
      writer: "William Lower",
      regDt: "December 31"
    },
    {
      rating: 4.5,
      title: "This is a stunning tool",
      content:
        "Slider Revolution is an incredible company. The've helped me through some issues blabla blabla blabla",
      writer: "William Lower",
      regDt: "December 31"
    }
  ];

  return (
    <Wrap>
      <InnerWrap className="layout">
        <H3>
          See What Slider Revolution Users Have to <br /> Say About Our
          Templates
        </H3>
        <h4>Exceptional Reviews that Resonate</h4>

        <Content>
          <ContentLeft>
            <p>Great</p>
            <Rating num={5} />
            <span>
              Based on <a href="">614 reviews</a>
            </span>
            <img src={TrustpilotLogo} alt="Trustpilot Logo" />
          </ContentLeft>
          <ContentRight>
            <ReviewWrap>
              <div className="swiper-btn">
                <div className="prev-arrow" onClick={handlePrev}>
                  <KeyboardArrowLeftIcon
                    style={{ color: "#999", fontSize: "20px" }}
                  />
                </div>
              </div>
              <Swiper
                ref={sliderRef}
                slidesPerView={slidesPerView}
                draggable={false}
                spaceBetween={20}
              >
                {sliderContent.map(
                  ({ rating, title, content, writer, regDt }, i) => (
                    <SwiperSlide key={i} className="slide_card">
                      <Rating num={rating} size={18} />
                      <h6>{title}</h6>
                      <p className="content">{content}</p>
                      <p>
                        <span className="writer">{writer},</span>
                        <span className="regDt">{regDt}</span>
                      </p>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <div className="swiper-btn">
                <div className="next-arrow" onClick={handleNext}>
                  <ChevronRightIcon
                    style={{ color: "#999", fontSize: "20px" }}
                  />
                </div>
              </div>
            </ReviewWrap>
            <span
              style={{
                marginLeft: "75px",
                fontSize: "13px",
                fontWeight: "bold"
              }}
            >
              Showing our favorite reviews
            </span>
          </ContentRight>
        </Content>

        <button>
          Buy Slider Revolution Now And Put This Template To Work For You
        </button>
      </InnerWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 100px 0;
  background-color: rgb(243, 242, 246);

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
    margin-top: 120px;

    :hover {
      background-color: #22c8e5;
    }
  }
`;
const InnerWrap = styled.div`
  h3 {
    line-height: 50px;
  }

  h4 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 70px;
    font-weight: 300;
  }
`;

const Content = styled.div`
  display: flex;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  > p {
    font-size: 24px;
    margin-bottom: 12px;
  }

  > span {
    margin-top: 12px;
    margin-bottom: 16px;
  }

  img {
    margin-top: 16px;
  }
`;
const ContentRight = styled.div`
  flex-grow: 1;
  min-width: 100px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ReviewWrap = styled.div`
  display: flex;
  font-size: 13px;

  h6 {
    font-weight: bold;
    margin: 12px 0 6px;
    color: #1c0950;
    font-size: 14px;
  }

  .slide_card {
    margin-bottom: 10px;
    color: #1c0950;
  }

  .content {
    margin-bottom: 8px;
    color: #1c0950;
    line-height: 1.2;
    max-width: 250px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .writer {
    color: rgba(28, 9, 80, 0.6);
  }

  .regDt {
    color: rgba(28, 9, 80, 0.6);
  }

  .swiper-btn {
    display: flex;
    align-items: center;
    margin: 0 25px;
  }

  .prev-arrow,
  .next-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #999;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    cursor: pointer;
  }
`;

export default Reviews;
