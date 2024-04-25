import React, { useState } from "react";
import { Card } from "./Card";
import styled from "@emotion/styled";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface ToggleCardProps {
  title: string;
  children: React.ReactNode;
}

const ToggleCard: React.FC<ToggleCardProps> = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Card>
      <Button onClick={() => setToggle(!toggle)}>
        {title} <ArrowDropUpIcon className={toggle ? "show" : ""} />
      </Button>
      <Content>
        <ContentInner className={toggle ? "show" : ""}>{children}</ContentInner>
      </Content>
    </Card>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 21px;
  color: rgb(28, 9, 80);

  > svg {
    font-size: 30px;
    transition: 0.3s;
  }

  svg.show {
    color: #ddd;
    transform: rotate(180deg);
  }
`;

const Content = styled.div`
  position: relative;
`;

const ContentInner = styled.div`
  transition: 0.25s;
  max-height: 0px;
  overflow: hidden;

  &.show {
    max-height: 800px;
  }
`;

export default ToggleCard;
