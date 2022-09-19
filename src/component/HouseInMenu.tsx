import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { modalGatherState } from "../recoil/store";

export const HouseInMapExplainImgBox = styled.div`
  width: 200px;
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

export const HouseInMenu = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const nav = useNavigate();

  return (
    <>
      <HouseInMapExplainImgBox>
        <ImgContent
          src="/assets/집안맵 설명.png"
          alt="집안맵 설명"
          onClick={() => {
            setmodalGather({ ...modalGather, houseInExplainModal: true });
          }}
        />
        <ImgContent
          src="/assets/정글맵돌아가기.png"
          alt="정글맵돌아가기"
          onClick={() => {
            nav("/");
          }}
        />
      </HouseInMapExplainImgBox>
    </>
  );
};
