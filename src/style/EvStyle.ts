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
  /* display: flex; */
  font-weight: ${(props: font) => (props.weight ? props.weight : 400)};
  text-align: ${(props: font) => (props.align ? props.align : "")};
  margin: 0;
  line-height: ${(props: font) => (props.lineHeight ? props.lineHeight : "")};
  white-space: ${(props: font) => (props.isWhiteSpace ? "pre-line" : "")};
`;

export const TitleFont = styled(EvKoreanFont)`
  font-family: "title4";
  font-weight: 700;
  font-size: 30px;
`;

type box = {
  width?: number | string;
  height?: number | string;
  margin?: string;
  isSide?: boolean;
  isCursor?: boolean;
  isAlignSide?: boolean;
  isContentSide?: boolean;
  url?: string;
  direction?: string;
  isPadding?: string;
  columnGap?: number | string;
  rowGap?: number | string;
  border?: string;
  borderRadius?: string;
  backgroundsize?: string;
  backgroundColor?: string;
};

export const EvFontBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: box) => (props.isAlignSide ? "" : "center")};
  justify-content: ${(props: box) => (props.isContentSide ? "" : "center")};
  width: ${(props: box) => props.width}px;
  height: ${(props: box) => props.height}px;
  margin: ${(props: box) => props.margin};
  background-color: ${(props: box) =>
    props.backgroundColor ? props.backgroundColor : ""};
`;

export const EvBox = styled.div`
  display: flex;
  flex-direction: ${(props: box) =>
    props.direction ? props.direction : "column"};
  align-items: ${(props: box) => (props.isAlignSide ? "" : "center")};
  justify-content: ${(props: box) => (props.isContentSide ? "" : "center")};
  width: ${(props: box) => props.width}px;
  height: ${(props: box) => props.height}px;
  margin: ${(props: box) => props.margin};
  row-gap: ${(props: box) => props.rowGap}px;
  column-gap: ${(props: box) => props.columnGap}px;
  border: ${(props: box) => props.border};
  border-radius: ${(props: box) => props.borderRadius};
  cursor: ${(props: box) => (props.isCursor ? "pointer" : "")};
  background-image: ${(props: box) => props.url};
  background-repeat: no-repeat;
  background-size: ${(props: box) =>
    props.backgroundsize ? props.backgroundsize : "cover"};
  background-position: center;
  background-color: ${(props: box) =>
    props.backgroundColor ? props.backgroundColor : ""};
`;

export const EvColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: box) => (props.isAlignSide ? "" : "center")};
  justify-content: ${(props: box) => (props.isContentSide ? "" : "center")};
  width: ${(props: box) => props.width}px;
  height: ${(props: box) => props.height}px;
  row-gap: ${(props: box) => props.rowGap}px;
  margin: ${(props: box) => props.margin};
  border: ${(props: box) => props.border};
  border-radius: ${(props: box) => props.borderRadius};
  cursor: ${(props: box) => (props.isCursor ? "pointer" : "")};
  background-image: ${(props: box) => props.url};
  background-repeat: no-repeat;
  background-size: ${(props: box) =>
    props.backgroundsize ? props.backgroundsize : "cover"};
  background-position: center;
  background-color: ${(props: box) =>
    props.backgroundColor ? props.backgroundColor : ""};
`;

export const EvRowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: box) => (props.isAlignSide ? "" : "center")};
  justify-content: ${(props: box) => (props.isContentSide ? "" : "center")};
  width: ${(props: box) => props.width}px;
  height: ${(props: box) => props.height}px;
  column-gap: ${(props: box) => props.columnGap}px;
  margin: ${(props: box) => props.margin};
  border: ${(props: box) => props.border};
  border-radius: ${(props: box) => props.borderRadius};
  cursor: ${(props: box) => (props.isCursor ? "pointer" : "")};
  background-image: ${(props: box) => props.url};
  background-repeat: no-repeat;
  background-size: ${(props: box) =>
    props.backgroundsize ? props.backgroundsize : "cover"};
  background-position: center;
  background-color: ${(props: box) =>
    props.backgroundColor ? props.backgroundColor : ""};
`;

export const TitleBox = styled(EvColumnBox)`
  /* background-color: yellow; */
  width: 300px;
  height: 35px;
  margin: 70px auto 0px auto;
`;

export const MemoryTitleBox = styled(EvColumnBox)`
  background-color: yellow;
  width: 300px;
  height: 35px;
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

export const EvProjectBtnAble = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props: btnable) =>
    props.isDisable ? "1px solid #DDDDDD" : "none"};
  border-radius: 30px;
  width: ${(props: btnable) => props.width}px;
  height: 45px;
  margin: ${(props: btnable) => props.margin};
  font-size: 15px;
  color: #ffffff;
  background: ${(props: btnable) =>
    props.isDisable ? "#F7F7F7  " : "#004257"};

  :hover {
    background-color: #ffffff;
    color: #004257;
  }
  cursor: ${(props: btnable) => (props.isDisable ? "" : "pointer")};
`;
