import React from "react";
import WheyShouldYou from "./discription/WhyShouldYou";
import styled from "@emotion/styled";
import ThereMore from "./discription/ThereMore";
import GetTheMost from "./discription/GetTheMost";
import Newsletter from "./discription/Newsletter";
import Join from "./discription/Join";
import Expandedcontent from "./discription/Expandedcontent";
import Reviews from "./discription/Reviews";

const Description: React.FC = () => {
  return (
    <DescriptionWrap>
      <WheyShouldYou />
      <Expandedcontent />
      <ThereMore />
      <Reviews />
      <GetTheMost />
      <Join />
      <Newsletter />
    </DescriptionWrap>
  );
};

const DescriptionWrap = styled.section`
  box-sizing: border-box;
`;

export default Description;
