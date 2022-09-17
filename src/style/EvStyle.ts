import styled from "styled-components";

type font = {
  size?: number;
  color?: string;
  isCorrect?: boolean;
  isBold?: boolean;
  isDisable?: boolean;
  align?: string;
  weight?: number;
  lineHeight?: string;
  isWhiteSpace?: boolean;
};

export const EvKoreanFont = styled.p`
  font-size: ${(props: font) => props.size}px;
  font-family: ${(props: font) => (props.isBold ? "Title4" : "Title2")};
  color: ${(props: font) => (props.color ? props.color : "#1A1A1A")};
  display: flex;
  font-weight: ${(props: font) => (props.weight ? props.weight : 400)};
  text-align: ${(props: font) => (props.align ? props.align : "")};
  margin: 0;
  line-height: ${(props: font) => (props.lineHeight ? props.lineHeight : "")};
  white-space: ${(props: font) => (props.isWhiteSpace ? "pre-line" : "")};
`;

type btnable = {
  width?: number | string;
  height?: number | string;
  margin?: string;
  isDisable?: boolean;
  background?: string;
  border?: string;
};

export const EvBtnAble = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props: btnable) =>
    props.isDisable ? "1px solid #DDDDDD" : "none"};
  border-radius: 30px;
  width: ${(props: btnable) => props.width}px;
  height: ${(props: btnable) => props.height}px;
  margin: ${(props: btnable) => props.margin};
  background: ${(props: btnable) =>
    props.isDisable ? "#F7F7F7  " : "#FFD600"};

  :hover {
    background-color: #ff8e8e;
  }
  cursor: ${(props: btnable) => (props.isDisable ? "" : "pointer")};
`;
