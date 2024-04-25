import React from "react";
import styled from "@emotion/styled";

const Join: React.FC = () => {
  return (
    <Wrap className="layout">
      <BackgroundVidio>
        <VideoWrap className="video_1">
          <div className="video_cover"></div>
          <video
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/particle_video.mp4"
            preload="metadata"
            muted
            autoPlay
            loop
          >
            <source
              src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/particle_video.mp4"
              type="video/mp4"
            />
          </video>
        </VideoWrap>
        <VideoWrap className="video_2">
          <div className="video_cover"></div>
          <video
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/carousel_video.mp4"
            preload="metadata"
            muted
            autoPlay
            loop
          >
            <source
              src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/carousel_video.mp4"
              type="video/mp4"
            />
          </video>
        </VideoWrap>
        <VideoWrap className="video_3">
          <div className="video_cover"></div>
          <video
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/beforeafter_video.mp4"
            preload="metadata"
            muted
            autoPlay
            loop
          >
            <source
              src="https://www.sliderrevolution.com/wp-content/uploads/2020/06/beforeafter_video.mp4"
              type="video/mp4"
            />
          </video>
        </VideoWrap>
      </BackgroundVidio>
      <TextArea>
        <h3>Join 9+ million building unique content width Slider Revolution</h3>
        <p>The #1 WordPress visual content building plugin</p>
        <button>View Pricing Plans</button>
      </TextArea>
    </Wrap>
  );
};

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 1180px;
  margin: 100px auto 120px;
  padding: 120px 160px;
  border-radius: 5px;
  background: linear-gradient(
    163deg,
    rgb(93, 52, 175) 0%,
    rgb(93, 52, 175) 25%,
    rgb(130, 0, 159) 65%,
    rgb(247, 52, 94) 100%
  );
  box-sizing: border-box;
  @media (max-width: 1240px) {
    width: 964px;
    padding: 100px;
  }
  @media (max-width: 1024px) {
    width: auto;
    margin: 100px 0px;
  }
  @media (max-width: 770px) {
    padding: 80px 60px;
  }
  @media (max-width: 479px) {
    padding: 60px 40px;
  }
`;

const TextArea = styled.div`
  position: relative;
  z-index: 100;

  h3 {
    font-size: 60px;
    font-weight: bold;
    color: white;
    max-width: 700px;
    line-height: 1.1;
    @media (max-width: 1240px) {
      font-size: 50px;
      width: 560px;
    }
    @media (max-width: 1024px) {
      width: auto;
    }
    @media (max-width: 770px) {
      font-size: 45px;
    }
    @media (max-width: 479px) {
      font-size: 35px;
    }
  }

  p {
    font-size: 20px;
    margin-top: 25px;
    color: rgba(255, 255, 255, 0.75);
  }

  button {
    width: 280px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: #f7345e;
    transition: 0.25s;
    margin-top: 40px;
    color: white;
    font-size: 18px;

    :hover {
      background-color: #22c8e5;
    }

    @media (max-width: 770px) {
      width: 200px;
      height: 38px;
      font-size: 15px;
      margin-top: 30px;
    }
  }
`;
const BackgroundVidio = styled.div`
  position: relative;
  bottom: -90px;
  left: 370px;

  .video_1 {
    top: 155px;
    left: 290px;
  }

  .video_2 {
    top: 105px;
    left: 10px;
  }

  .video_3 {
    left: 300px;
  }

  @media (max-width: 1240px) {
    .video_1 {
      top: 135px;
      left: 200px;
    }

    .video_2 {
      top: 85px;
      left: -35px;
    }

    .video_3 {
      left: 200px;
    }
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

const VideoWrap = styled.div`
  position: relative;

  video {
    box-shadow: rgba(28, 9, 80, 0.35) 0px 20px 40px 0px;
  }

  video,
  .video_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    height: 180px;
    transform: rotate(-20deg) rotateY(20deg) rotateX(50deg) scale(0.91, 1);
    @media (max-width: 1240px) {
      width: 265px;
      height: 150px;
    }
  }

  &.video_1 .video_cover {
    z-index: 10;
    background: linear-gradient(
      160deg,
      rgba(130, 0, 159, 0.5) 0%,
      rgba(189, 26, 127, 0) 50%,
      rgba(247, 52, 94, 0) 100%
    );
  }

  &.video_2 .video_cover {
    z-index: 10;
    background: linear-gradient(
      160deg,
      rgb(130, 0, 159) 0%,
      rgba(247, 52, 94, 0) 100%
    );
  }

  &.video_3 .video_cover {
    z-index: 10;
    background: linear-gradient(
      160deg,
      rgb(130, 0, 159) 0%,
      rgba(189, 26, 127, 0) 50%,
      rgba(247, 52, 94, 0) 100%
    );
  }
`;

export default Join;
