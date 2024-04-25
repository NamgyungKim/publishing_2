import React from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";

interface RatingStarInterface {
  num: number;
  color?: string;
  size?: number;
}

const RatingStar: React.FC<RatingStarInterface> = ({
  num,
  color = "#73cf11",
  size = 30
}) => {
  return (
    <Rating
      defaultValue={num}
      precision={0.5}
      icon={<ARating color={color} size={size} />}
      emptyIcon={<AEmptyRating size={size} />}
      readOnly
    />
  );
};

const ARating: React.FC<{ color: string; size: number }> = ({
  color,
  size
}) => {
  return (
    <Star color={color} size={size}>
      <StarIcon style={{ color: "#fff", width: `${size}px` }} />
    </Star>
  );
};

const AEmptyRating: React.FC<{ size: number }> = ({ size }) => {
  return (
    <EmptyStar size={size}>
      <StarIcon style={{ color: "#fff", width: `${size}px` }} />
    </EmptyStar>
  );
};

const Star = styled.div<{ color: string; size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  margin-left: 2px;
`;

const EmptyStar = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #dcdce6;
  margin-left: 2px;
`;

export default RatingStar;
