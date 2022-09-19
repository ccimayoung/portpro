import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { modalGatherState } from "../recoil/store";
import { EvKoreanFont } from "../style/EvStyle";

export const HouseInGoBox = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffffdc;
  position: fixed;
  left: calc(2% + 100px);
  margin: -115px 0 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

export const ImgContent = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const HouseGoMenu = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const nav = useNavigate();

  return (
    <>
      <HouseInGoBox
        onClick={() => {
          nav("/houseinmap");
        }}
      >
        <EvKoreanFont size={30}> House</EvKoreanFont>
      </HouseInGoBox>
    </>
  );
};
