import styled from "@emotion/styled";
import { CSSObject } from "@emotion/react";

export const Card = styled.div<{ padding?: number; css?: CSSObject }>`
  border-radius: 5px;
  box-sizing: border-box;
  padding: ${({ padding }) => padding ?? 50}px;
  box-shadow: 0 10px 30px 0 rgba(28, 9, 80, 0.07);
  ${(props) => props.css}
`;
