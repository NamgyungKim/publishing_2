import styled from "@emotion/styled";

const H2 = styled.h2`
  color: #f7345e;
  background: linear-gradient(-107deg, #82009f 0%, #f7345e 100%);
  transform: skewX(-10deg);
  position: relative;
  display: inline-block;
  font-size: 1.2em;
  line-height: 1em;
  font-weight: 700;
  text-transform: capitalize;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 90px;
  text-align: center;
  @media (max-width: 1240px) {
    font-size: 80px;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 770px) {
    font-size: 42px;
  }
`;

const H3 = styled.h3`
  font-size: 45px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  color: #1c0950;
  margin-bottom: 30px;
  @media (max-width: 1240px) {
    font-size: 40px;
  }
  @media (max-width: 479px) {
    font-size: 35px;
  }
`;

const H4 = styled.h4`
  color: #1c0950;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 40px;
`;

export { H2, H3, H4 };
